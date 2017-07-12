import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor( private http:Http) { }
  getCurrentTime(){
   return this.http.get('http://time.jsontest.com')
     .map(res => res.json());
  }
  postValidation(){
    var json = JSON.stringify({var1:'test',var2:3});
    var prams = ' json=' +json;
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this.http.post('http://validate.jsontest.com',prams, headers ).map(res => res.json())

  }
}
