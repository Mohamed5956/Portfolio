import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

  @Input() width: string = '20';
  @Input() height: string = '20';
  @Input() color: string = 'red-600';
  constructor() { }
  ngOnInit(): void {
  }

}
