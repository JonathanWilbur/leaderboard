import { Component, OnInit, Input } from '@angular/core';
import { Leader } from './leader';
import { LeadersGetterService } from './leaders-getter.service';

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [
    LeadersGetterService
  ]
})
export class LeaderboardComponent implements OnInit {

  @Input() public title! : string;
  @Input() public nameColumnHeader : string = "Name";
  @Input() public scoreColumnHeader : string = "Score";
  public leaders : Leader[] = [];

  public displayingHistogram : boolean = false;
  public displayingSourceEditor : boolean = false;

  constructor(private leadersGetterService : LeadersGetterService) { }

  ngOnInit() {
    this.getLeaders();
  }

  getLeaders() : void {
    this.leadersGetterService.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

  onToggleHistogram() : void {
    this.displayingHistogram = !this.displayingHistogram;
  }

  onToggleSourceEditor() : void {
    this.displayingSourceEditor = !this.displayingSourceEditor;
  }

  onDelete() : void {
    console.log("Board would have been deleted.");
  }

}
