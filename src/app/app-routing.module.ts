import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    }
    // ,
    // {
    //     path: 'im',
    //     loadChildren: () => import('./im/im.module').then(m => m.ImModule),
    //     data: {preload: true}
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService,
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
