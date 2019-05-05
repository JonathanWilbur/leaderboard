import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { LeaderboardComponent } from './leaderboard.component';
import { LeaderComponent } from './leader/leader.component';
import { LeaderSortPipe } from './leader-sort.pipe';
// import { D3graphComponent } from './d3graph/d3graph.component';
import { D3Service } from 'd3-ng2-service';
import { HistogramComponent } from './histogram/histogram.component';
import { BarComponent } from './histogram/bar/bar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LeaderboardComponent, LeaderComponent, LeaderSortPipe, HistogramComponent, BarComponent],
  providers: [D3Service],
  exports: [
    LeaderboardComponent
  ]
})
export class LeaderboardModule { }
