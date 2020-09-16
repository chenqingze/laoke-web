import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ImPage} from './im.page';

const routes: Routes = [
    {
        path: '',
        component: ImPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ImRoutingModule {
}
