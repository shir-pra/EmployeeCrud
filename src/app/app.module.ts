import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { TestinginterceptorInterceptor } from './testinginterceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [{provide :HTTP_INTERCEPTORS,useClass:TestinginterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
