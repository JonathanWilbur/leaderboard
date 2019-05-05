import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {

  @Input() public name! : string;
  @Input() public score! : number;

  constructor() { }

  ngOnInit() {
  }

}
