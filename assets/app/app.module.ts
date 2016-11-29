import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {nvD3} from './nvd3/ng2-nvd3';

@NgModule({
    declarations: [AppComponent, nvD3],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}