import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-buttons',
  templateUrl: './time-buttons.component.html',
  styleUrls: ['./time-buttons.component.css']
})
export class TimeButtonsComponent implements OnInit {
  @Output() CommandValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendCommand($event:string){
    this.CommandValue.emit($event);
  }
}
