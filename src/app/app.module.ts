import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {Http, HttpModule} from "@angular/http";
import {HttpService} from "./http-service/http.service";
import {MockBackend} from "@angular/http/testing";
import { SimpleDirective } from './app-directive/simple.directive';
import { ParameetrizeDirective } from './app-directive/parameetrize.directive';
import { ExponentialPipe } from './custom-pipe/exponential.pipe';
import { SearchPipe } from './custom-pipe/search.pipe';
import { ChildComponent } from './child-component/child/child.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    ParameetrizeDirective,
    ExponentialPipe,
    SearchPipe,
    ChildComponent,
    MyNewDirectiveDirective
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
