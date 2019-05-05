// import { BarComponent } from './bar/bar.component';
import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Leader } from '../leader';
// import { D3Service, D3, AxisScale, Axis } from 'd3-ng2-service';

@Component({
  selector: 'histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css'],
})
export class HistogramComponent implements OnInit {

  @Input() public leaders! : Leader[];
  public maximum : number;

  constructor() {
    
  }

  ngOnInit() {
    this.maximum = this.leaders.sort((a : Leader, b : Leader) => (b.score - a.score))[0].score;
  }
}