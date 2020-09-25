import {Injectable} from '@angular/core';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {Platform, ToastController} from '@ionic/angular';
import {Vibration} from '@ionic-native/vibration/ngx';
import {File} from '@ionic-native/file/ngx';
import {Media, MediaObject} from '@ionic-native/media/ngx';
import * as OSS from 'ali-oss';

declare var window;

export function getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)['__zone_symbol__originalInstance'];
    return zoneOriginalInstance || fileReader;
}


@Injectable({
    providedIn: 'root'
})
export class TalkCommonService {

    currentUser;
    mediaFileName;
    mediaFile: any;
    mediaObj: MediaObject;
    // 是否开始录音
    startRecord: boolean;
    recordInterval;
    recordTime = 60;
    private duration: any;


    // Oss 相关
    client: any;
    dir: string;
    // 图片转换
    base64;
    // blob对象
    blob;
    // 文件类型
    fileType;

    constructor(private androidPermissions: AndroidPermissions,
                private vibration: Vibration,
                private file: File,
                private media: Media,
                private toastCtrl: ToastController,
                private platform: Platform) {
        this.currentUser = '123';
    }

    // 弹窗
    async showToast(messages: string) {
        const toast = await this.toastCtrl.create({
            message: messages,
            duration: 1000,
            position: 'middle',
            color: 'dark',
            cssClass: 'toastdefault'
        });
        toast.present();

    }

    startRecordAudio() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then((d) => {
            if (!!d && d.hasPermission) {
                this.platform.ready().then(() => {
                    this.vibration.vibrate(100);
                    const recordName = this.currentUser + new Date().getTime() + '.wav';
                    this.mediaFileName = recordName;
                    if (this.platform.is('ios')) {
                        this.file.createFile(this.file.documentsDirectory, recordName, true).then((fileEntry) => {
                            this.mediaFile = fileEntry;
                            if (this.mediaObj !== undefined && this.mediaObj != null) {
                                this.mediaObj.stopRecord();
                                setTimeout(() => {
                                    this.mediaObj = this.media.create(this.file.documentsDirectory.replace(/^file:\/\//, '') + recordName);
                                    this.startRecord = true;
                                    this.recordMedia();
                                }, 400);
                            } else {
                                this.mediaObj = this.media.create(
                                    this.file.documentsDirectory.replace(
                                        /^file:\/\//,
                                        ''
                                    ) + recordName
                                );
                                this.startRecord = true;
                                this.recordMedia();
                            }
                        });
                    } else {
                        this.file.createFile(this.file.dataDirectory, recordName, true).then((fileEntry) => {
                            this.mediaFile = fileEntry;
                            if (this.mediaObj !== undefined && this.mediaObj != null) {
                                this.mediaObj.stopRecord();
                                this.mediaObj = this.media.create(this.file.dataDirectory.replace(/^file:\/\//, '') + recordName);
                                this.startRecord = true;
                                this.recordMedia();
                            } else {
                                this.mediaObj = this.media.create(
                                    this.file.dataDirectory.replace(/^file:\/\//, '') + recordName
                                );
                                this.startRecord = true;
                                this.recordMedia();
                            }
                        });
                    }
                });
            }
        });
    }

    // 语音倒计时
    recordTimeOut() {
        this.recordInterval = setInterval(() => {
            if (this.recordTime <= 0) {
                clearInterval(this.recordInterval);
                this.stopRecord();
            } else {
                this.recordTime--;
                this.duration = 60 - this.recordTime;
            }
        }, 1000);
    }

    // 录音
    recordMedia() {
        this.mediaObj.startRecord();
        this.recordTimeOut();
        this.mediaObj.onStatusUpdate.subscribe((status) => {
            if (status == 4) {
                this.duration = 60 - this.recordTime;
                clearInterval(this.recordInterval);
                this.recordTime = 60;
                this.startRecord = false;
                setTimeout(() => {
                    this.uploadVoice(this.file.dataDirectory, this.mediaFileName);
                }, 500);
            }
        });
        this.mediaObj.onSuccess.subscribe(() => {
            console.log('结束了');
        });
        this.mediaObj.onError.subscribe((error) => {
            clearInterval(this.recordInterval);
            this.stopRecord();
            this.recordTime = 60;
            this.startRecord = false;
            console.log(error);
        });
    }

    // 非正常结束录音控制
    stopRecord() {
        if (this.mediaObj != undefined && this.mediaObj != null) {
            this.startRecord = false;
            this.mediaObj.stopRecord();
            this.duration = 1;
        }
    }

    // 松开录音按键
    finishRecord() {
        clearInterval(this.recordInterval);
        this.startRecord = false;
        setTimeout(() => {
            this.startRecord = false;
            if (this.mediaObj != undefined && this.mediaObj != null) {
                this.mediaObj.stopRecord();
            }
        }, 400);
    }


    // 上传录音
    uploadVoice(dir, fileName) {
        this.recordTime = 60;

        this.mediaFile.file((file) => {
            console.log('进入上传');
            console.log(file.size);

            if (this.platform.is('android')) {
                if (file.size >= 5000) {
                    const reader = getFileReader();
                    reader.onloadend = () => {
                        console.log('success', reader.result);
                        const objectKey = 'voice/' + this.currentUser + `${new Date().getTime()}.wav`;
                        const buffer = new OSS.Buffer(reader.result);
                        this.client.put(objectKey, buffer).then((result) => {
                            console.log('==========上传oss返回的结果1===============', result);
                            // 发送语音
                            // this.sendSoundMsg(objectKey, dir + fileName, new Date().getTime().toString());
                            this.mediaObj.release();
                            this.file.removeFile(this.file.dataDirectory, fileName);
                            return objectKey;

                        }).catch((err) => {
                            console.log('======上传oss返回的结果err=======', err);
                            alert('音频上传失败，请重新上传');
                        });
                    };
                    reader.onerror = (er) => {
                        console.log(er);
                    };
                    reader.readAsArrayBuffer(file);
                } else {
                    this.showToast('录音时间过短');
                }
            } else {
                if (file.size >= 20000 && this.duration > 0) {
                    const reader = getFileReader();
                    reader.onloadend = () => {
                        console.log('success', reader.result);
                        const objectKey = 'voice/' + this.currentUser + `${new Date().getTime()}.wav`;
                        const buffer = new OSS.Buffer(reader.result);
                        this.client.put(objectKey, buffer).then((result) => {
                            console.log('==========上传oss返回的结果1===============', result);
                            // 发送语音
                            // this.sendSoundMsg(objectKey, dir + fileName, new Date().getTime().toString());
                            this.mediaObj.release();
                            this.file.removeFile(this.file.dataDirectory, fileName);
                            return objectKey;

                        }).catch((err) => {
                            console.log('======上传oss返回的结果err=======', err);
                            alert('音频上传失败，请重新上传');
                        });
                    };
                    reader.onerror = (er) => {
                        console.log(er);
                    };
                    reader.readAsArrayBuffer(file);
                } else {
                    this.showToast('录音时间过短');
                }
            }
        });
    }
}
