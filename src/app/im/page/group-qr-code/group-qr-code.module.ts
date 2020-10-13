import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupQrCodePageRoutingModule } from './group-qr-code-routing.module';

import { GroupQrCodePage } from './group-qr-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupQrCodePageRoutingModule
  ],
  declarations: [GroupQrCodePage]
})
export class GroupQrCodePageModule {}
