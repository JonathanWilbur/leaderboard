import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitlicense',
  templateUrl: './mitlicense.component.html',
  styleUrls: ['./mitlicense.component.css']
})
export class MitlicenseComponent implements OnInit {

  public readonly year : number = (new Date()).getFullYear();
  public readonly author : string = "Jonathan M. Wilbur";

  constructor() { }

  ngOnInit() {
  }

}
