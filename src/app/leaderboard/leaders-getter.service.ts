import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Leader } from 'src/app/leaderboard/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersGetterService {

  public sourceURI : string = "";
  public updateIntervalInSeconds : number = 3;

  constructor(private http : HttpClient) {

  }

  public getLeaders () : Observable<Leader[]> {
    if (this.sourceURI == "") {
      return of([
        {
          name: "Jonathan M. Wilbur",
          score: 500
        },
        {
          name: "Mojo Jojo",
          score: 1000
        },
        {
          name: "Phil Collins",
          score: 501
        }
      ]);
    } else {
      return this.http.get<Leader[]>(this.sourceURI);
    }
  }
}
