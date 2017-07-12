import {Component, OnInit} from '@angular/core';
import {HttpService} from './http-service/http.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  getData: String;
  postData: String;
  isHidden:boolean;
  power:any;
  factor:any;
  inputToSearch:String;
  colorList=['GREEN','READ','YELLOW','BLACK','WHITE'];



  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.isHidden = true;
   }
  dataPost(){
    this.httpService.postValidation().subscribe(data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("finished"));
  }
  onGetTest() {
      this.httpService.getCurrentTime().subscribe(data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("finished"));
      console.log(this.getData);
  }
}
