import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SetGroupNamePageRoutingModule} from './set-group-name-routing.module';

import {SetGroupNamePage} from './set-group-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetGroupNamePageRoutingModule
  ],
  declarations: [SetGroupNamePage]
})
export class SetGroupNamePageModule {}
