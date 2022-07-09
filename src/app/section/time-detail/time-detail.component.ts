import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-detail',
  templateUrl: './time-detail.component.html',
  styleUrls: ['./time-detail.component.css']
})
export class TimeDetailComponent implements OnInit {
  @Input() InputValue?:string;
  timeInterval?:any;
  h:number = 0;
  m:number = 0;
  s:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  startTime(){
    this.timeInterval = setInterval(()=>{this.s++}, 100);
  }
  stopTime(){
    clearInterval(this.timeInterval);
  }
  resetTime(){
    this.stopTime();
    this.s = 0;
  }

  ngOnChanges(changes:SimpleChanges){
    for(let prop in changes){
      if(prop == 'InputValue'){
        switch(changes[prop].currentValue){
          case 'start':this.startTime(); break;
          case 'stop':this.stopTime(); break;
          case 'reset':this.resetTime(); break;
        }
      }
    }
  }
}
