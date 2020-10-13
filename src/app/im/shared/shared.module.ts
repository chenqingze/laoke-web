import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MucHeaderPipe} from './pipe/muc-header/muc-header.pipe';
import {SearchTextPipe} from './pipe/search-text/search-text.pipe';


@NgModule({
    declarations: [MucHeaderPipe, SearchTextPipe],
    imports: [
        CommonModule,
    ], exports: [
        SearchTextPipe,
        MucHeaderPipe
    ],
})
export class SharedModule {
}
