import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {Http, HttpModule} from "@angular/http";
import {HttpService} from "./http-service/http.service";
import {MockBackend} from "@angular/http/testing";
import { SimpleDirective } from './app-directive/simple.directive';
import { ParameetrizeDirective } from './app-directive/parameetrize.directive';


@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    ParameetrizeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, MockBackend,],
  bootstrap: [AppComponent ]
})
export class AppModule { }
