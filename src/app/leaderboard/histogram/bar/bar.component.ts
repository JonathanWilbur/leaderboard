import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @Input() public name! : string;
  @Input() public score! : number;
  @Input() public maximum! : number;

  constructor() {
    
  }

  ngOnInit() {

  }

  get percentageOfMaximum () : number {
    return ((this.score / this.maximum) * 100);
  }

}
