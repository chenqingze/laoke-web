import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ImPage} from './im.page';
import {ImRoutingModule} from './im-routing.module';
import {AuthService} from './auth/auth.service';

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

    constructor(
        private authService: AuthService,
        @Optional() @SkipSelf() parentModule?: ImModule
    ) {
        if (parentModule) {
            throw new Error(
                'ImModule is already loaded. Import it in the AppModule only');
        }
    }

    /**
     * 根模块导入使用
     */
    // static forRoot(config: ImConfig): ModuleWithProviders<ImModule> {
    //     return {
    //         ngModule: ImModule,
    //         providers: [
    //             {provide: ImConfig, useValue: config}
    //         ]
    //     };
    // }

}
