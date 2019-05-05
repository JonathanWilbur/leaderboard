import { Pipe, PipeTransform } from '@angular/core';
import { Leader } from './leader';

@Pipe({
  name: 'leaderSort'
})
export class LeaderSortPipe implements PipeTransform {

  transform(value : Leader[]): Leader[] {
    return value.sort((a : Leader, b : Leader) => (a.score - b.score));
  }

}
