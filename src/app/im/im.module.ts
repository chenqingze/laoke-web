import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ImPage} from './im.page';
import {ImConfig} from './im.config';
import {environment} from '../../environments/environment';
import {ImRoutingModule} from './im-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImRoutingModule
    ],
    declarations: [ImPage]
})
export class ImModule {

    constructor(@Optional() @SkipSelf() parentModule?: ImModule) {
        if (parentModule) {
            throw new Error(
                'ImModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: ImConfig): ModuleWithProviders<ImModule> {
        return {
            ngModule: ImModule,
            providers: [
                {provide: ImConfig, useValue: config}
            ]
        };
    }

}
