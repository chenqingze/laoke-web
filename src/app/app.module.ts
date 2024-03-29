import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {ImConfig} from './im/im.config';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Camera} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
        // ImModule.forRoot(environment.im)
    ],
    providers: [
        StatusBar,
        ImagePicker,
        SplashScreen,
        Camera,
        HttpClient,
        SQLite,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
