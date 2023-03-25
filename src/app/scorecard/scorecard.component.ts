import { Component } from '@angular/core';
import { PlayerType } from '../player-type.enum';
import { ResultType } from '../result-type.enum';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent {
  playerScore: number = 0;
  cpuScore: number = 0;
  result: ResultType = ResultType.draw;

  updateScore(winner: any) {
    switch(winner) {
      case PlayerType.regular: 
        this.playerScore++; 
        this.result = ResultType.won;
        break;
      case PlayerType.cpu:
        this.cpuScore++; 
        this.result = ResultType.lose;
        break;
      default: 
        this.result = ResultType.draw;
    }
  }
}
