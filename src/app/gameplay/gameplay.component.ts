import { Component, EventEmitter, Output } from '@angular/core';
import { PlayerType } from '../player-type.enum';
import { GameChoices } from '../game-choices.enum';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent {
  @Output() winnerChosen = new EventEmitter<any>();
  gameChoices = GameChoices;

  cpuChoice: any = GameChoices.rock;

  selectCpuChoice() {
    const enumValues = Object.values(GameChoices);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    this.cpuChoice = enumValues[randomIndex];
  }
  isSelected(choice: GameChoices) {
    this.selectCpuChoice();
    let winner: PlayerType = this.chooseWinner(choice);
    this.winnerChosen.emit(winner);
  }

  chooseWinner(choice: GameChoices): PlayerType {
    switch(choice) {
      case GameChoices.rock: 
        if(this.cpuChoice == GameChoices.paper) return PlayerType.cpu;
        if(this.cpuChoice == GameChoices.scissor) return PlayerType.regular;
        break;
      case GameChoices.paper:
        if(this.cpuChoice == GameChoices.rock) return PlayerType.regular;
        if(this.cpuChoice == GameChoices.scissor) return PlayerType.cpu;
        break;
      case GameChoices.scissor:
        if(this.cpuChoice == GameChoices.paper) return PlayerType.regular;
        if(this.cpuChoice == GameChoices.rock) return PlayerType.cpu;
        break;
      default: 
        return PlayerType.none;
    }
    return PlayerType.none;
  }
}
