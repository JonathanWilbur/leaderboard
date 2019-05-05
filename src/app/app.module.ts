import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

import { AppComponent } from './app.component';
import { MitlicenseComponent } from './mitlicense/mitlicense.component';

@NgModule({
  declarations: [
    AppComponent,
    MitlicenseComponent
  ],
  imports: [
    BrowserModule,
    LeaderboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
