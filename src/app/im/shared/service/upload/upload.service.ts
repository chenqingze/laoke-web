import {Injectable} from '@angular/core';
import {ImageModel} from '../../model/image.model';
import {Base64} from '@ionic-native/base64/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {ApiService} from '../../../core/api/api.service';
import {AlertControllerService} from '../alert-controller/alert-controller.service';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import * as OSS from 'ali-oss';
import {API_URL} from '../../../core/api/api.url';

declare var window;
declare var plugins;

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    // 调用相机时传入的参数
    private cameraOpt = {
        quality: 100,
        destinationType: 1, // Camera.DestinationType.base64,
        sourceType: 1, // 相册选择,
        encodingType: this.camera.EncodingType.JPEG, // Camera.EncodingType.JPEG,
        mediaType: 0, // Camera.MediaType.PICTURE,
        allowEdit: false
    };
    // oss目录
    private getDir: string;
    public base64Image: Base64;
    /**
     * 请求阿里oss
     */
    public client;
    public dir: string;
    public imageList: ImageModel[];
    public base64;

    public blob;
    public fileType;

    constructor(
        private camera: Camera,
        public http: HttpClient,
        private dialog: AlertControllerService,
        private toastCtrl: ToastController,
        private imagePicker: ImagePicker,
        private apiService: ApiService
    ) {
        this.imageList = new Array();
        this.getDir = 'info-app-3.0';
        this.getOssInfo();
    }

    // 启动拍照功能
    public startCamera(): Promise<any> {
        return this.camera.getPicture(this.cameraOpt).then((imageData) => {
            return imageData.toString();
        }, (err) => {
            console.log('照相机错误', err);
            // this.dialog.alert('请确认您的相机权限是否开启!');
        });
    }

    // 从相册中选择图片
    public openImgPicker(maximumImagesCount): Promise<any> {
        const cameraOption = {
            quality: 100,
            destinationType: 1, // Camera.DestinationType.base64,
            sourceType: 0, // 相册选择,
            encodingType: this.camera.EncodingType.JPEG, // Camera.EncodingType.JPEG,
            mediaType: 0, // Camera.MediaType.PICTURE,
            allowEdit: false,
        };
        return this.camera.getPicture(cameraOption).then((imageData) => {
            // console.log(imageData);
            return imageData.toString();
            // const img: ImageModel = new ImageModel();
            // img.isDeleted = false;
            // img.url = temp;
            // this.uploadFile(temp.toString());
            // this.imageList.push(img);
        }, (err) => {
            console.log('照相机错误', err);
            // this.dialog.alert('请确认您的相机权限是否开启!');
        });
    }

    public choosePictureByImagePicker(maximumImagesCount): Promise<any> {
        return this.imagePicker.hasReadPermission().then(async (hasPermission) => {
            if (!hasPermission) {
                return this.imagePicker.requestReadPermission().then(
                    await this.getPicturesByImagePicker(maximumImagesCount)
                );
            } else {
                return this.getPicturesByImagePicker(maximumImagesCount);
            }
        });
    }

    async getPicturesByImagePicker(maximumImagesCount): Promise<any> {
        return this.imagePicker
            .getPictures({
                quality: 100,
                outputType: 2,
                maximumImagesCount,
            })
            .then((results) => {
                console.log(
                    'Got image back',
                    results,
                    results.path,
                    results.webPath,
                    results.format,
                    results.exif
                );
                const images = [];
                console.log('+++++++++++results++++++++++++', results);
                results.forEach(element => {
                    const img: ImageModel = new ImageModel();
                    img.isDeleted = false;
                    img.nativeUrl = element;
                    images.push(img);
                });
                return images;
            })
            .catch((error) => {
                console.log(error);
            });
    }


    // 获取oss签名
    public getOssInfo(): void {
        const url = API_URL.COMMON.getOssSign;
        // 本地缓存获取token
        const token = localStorage.getItem('token');
        this.apiService.getByAuth(url).subscribe((data: any) => {
            console.log('=====获取的图片签名=====', data);
            localStorage.setItem('ossExpiration', data.data.expiration);
            this.client = new OSS({
                accessKeyId: data.data.accessKeyId,
                accessKeySecret: data.data.accessKeySecret,
                stsToken: data.data.securityToken,
                bucket: 'aihangyun-info',
                region: 'oss-cn-shanghai'
            });
            this.dir = this.getDir;
        });
    }

    // 将图片路径转化为base64
    public getBase64Image(img) {
        const options = {
            quality: 10,
            resultType: 'blob',
            maxSize: 600
        };
        let targetWidth: number;

        let targetHeight: number;

        // 图片比例
        const ratio = img.width / img.height;

        targetWidth = img.width > options.maxSize ? options.maxSize : img.width;

        targetHeight = +(targetWidth / ratio).toFixed(0);
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        // ctx.clearRect(0, 0, img.width, img.height);
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
        const dataURL = canvas.toDataURL('image/jpeg', options.quality);
        return dataURL;
    }

    // 转化为bob
    public toBlob(urlData, fileType) {
        const bytes = window.atob(urlData);
        let n = bytes.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bytes.charCodeAt(n);
        }
        return new Blob([u8arr], {type: fileType});
    }

    // 上传到oss文件
    uploadFile(imageURL) {
        console.log('=========console============');
        console.log(imageURL);
        const self = this;
        const image = new Image();
        image.onload = () => {
            console.log('=========image.onload走了没有========');
            self.base64 = self.getBase64Image(image);
            // console.log("=======self.base64是什么==========",self.base64);
            const base64 = self.base64.split(',').pop();
            self.fileType = self.base64.split(';').shift().split(':').pop();
            // base64转blob
            self.blob = self.toBlob(base64, self.fileType);
            console.log('========blob的输出结果========', self.blob);
            // blob转arrayBuffer
            const reader = new FileReader();
            console.log('============self.blob=============', self.blob);
            reader.readAsArrayBuffer(self.blob);
            reader.onload = (event) => {
                console.log('=====执行了没有reader.onload======', reader.result);

                // 文件名 一会改
                // tslint:disable-next-line: max-line-length
                const objectKey = self.dir + self.imageList.length + `${new Date().getTime()}}`;
                console.log('=====执行了没有objectKey======', objectKey);

                // arrayBuffer转Buffer
                const buffer = new OSS.Buffer(reader.result);
                console.log('=====执行了没有buffer======', buffer);

                // 上传
                self.client.put(objectKey, buffer).then((result) => {

                    console.log('==========上传oss返回的结果===============', result);
                    // let url: string = result.url;
                    //  let imgUrl = url.split(',')[1].split("fileDownloadUri:")[1];
                    const img: ImageModel = new ImageModel();
                    img.ossUrl = objectKey;
                    img.isDeleted = false;
                    // self.images.push(img);
                    self.imageList.push(img);
                    // return self.imageList;
                }).catch((err) => {
                    console.log('======上传oss返回的结果err=======', err);
                    self.dialog.presentAlert('图片上传失败，请重新上传');
                    self.getOssInfo();
                });
            };
        };
        image.src = window.Ionic.WebView.convertFileSrc(imageURL);
    }

    // 图片裁剪
    public async imageCrop(image: ImageModel): Promise<any> {
        if (image.nativeUrl === undefined) {
            const toast = await this.toastCtrl.create({
                message: '该图片不支持裁剪',
                duration: 1500,
                position: 'top',
                color: 'dark',
                cssClass: 'toastdefault'
            });
            toast.present();
            return;
        }
        const options = {
            quality: 50,
            // widthRatio: 5,
            // heightRatio: 4,
            targetWidth: 500,
            targetHeight: 400
        };
        return await plugins.crop.promise(image.nativeUrl, options)
            .then((newPath) => {
                console.log(newPath);
                // this.uploadFile(newPath);
                return newPath;
            });
        // .catch(function fail(err) {
        //   alert(err)
        // });
    }
}
