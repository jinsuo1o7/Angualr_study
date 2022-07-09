import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  currentValue?:string;
  constructor() { }

  ngOnInit(): void {
  }
  changeCurrent($event:string){
    this.currentValue = $event;
  }
}
