import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') incomingData: string;

  @Output('childData') outgoingData = new EventEmitter<string>();

  childSampleData :string = "Some child Data";


  public sendData(data:any){
    this.outgoingData.emit(data);
  }
  constructor() { }

  ngOnInit() {
  }

}
