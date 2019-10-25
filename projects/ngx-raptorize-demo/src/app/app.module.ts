import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxRaptorizeModule } from 'ngx-raptorize';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxRaptorizeModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
