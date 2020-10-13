import {Injector} from '@angular/core';
import {ImConfig} from './im.config';
import {environment} from '../../environments/environment';

export const imInjector = Injector.create({
    providers: [
        {provide: ImConfig, useValue: environment.im}
    ],
});
