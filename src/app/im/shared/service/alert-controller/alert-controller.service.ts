import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {

  constructor(
    public alertController: AlertController
  ) { }

  //
  public async doubleAlert(header: string, message: string, cancel: string, okay: string, callbackCancel, callbackOk): Promise<any> {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'alert-common',
      buttons: [
        {
          text: cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            callbackCancel();
          }
        }, {
          text: okay,
          handler: () => {
            callbackOk();
          }
        }
      ]
    });

    await alert.present();
  }

  // 带输入框的弹出框
  public async inputAlert(header: string, placeHolder: string, cancel: string, ok: string, callback): Promise<any> {
    const alert = await this.alertController.create({
      header,
      cssClass: 'alert-common',
      inputs: [
        {
          name: 'name2',
          type: 'textarea',
          placeholder: placeHolder,
        }
      ],
      buttons: [
        {
          text: cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            callback(data.name2);
          }
        }
      ]
    });
    await alert.present();

  }
  /**
   * radio加input的弹出框
   * @param body name,type,label,value 如果type是radio需要加checked(boolean)
   */
  public async Alert(header: string, body: any[], callback: (data: any) => void, message?: string): Promise<any> {
    const alert = await this.alertController.create({
      header,
      cssClass: 'alert-common',
      inputs: body,
      message,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: '确定',
          handler: (data) => {
            callback(data);
          }
        }
      ]
    });

    await alert.present();
  }

  // alert提示框
  public async presentAlert(message: string): Promise<any> {
    const alert = await this.alertController.create({
      header: '提示框',
      // subHeader: 'Subtitle',
      cssClass: 'alert-common',
      message,
      buttons: ['确定']
    });

    await alert.present();
    await alert.onWillDismiss();
  }

  // alert提示框 header+message
  public async presentHeaderAlert(header: string, message: string): Promise<any> {
    const alert = await this.alertController.create({
      header,
      // subHeader: 'Subtitle',
      cssClass: 'alert-common',
      message,
      buttons: ['确定']
    });

    await alert.present();
    await alert.onWillDismiss();
  }


  // alert提示框
  public async presentAlertArea(message: string, id: string) {
    const alert = await this.alertController.create({
      /*  header: '审核信息',
       inputs: [{
         type: 'textarea',
         value: message,
       }],
       buttons: ['确定']
     }); */
      header: '审核信息',
      // subHeader: 'Subtitle',
      cssClass: 'alert-common',
      message,
      buttons: ['确定']
    });
    await alert.present();
  }

}
