/////////////////////////////

import {
  Component,
  Input,
  Output,
  HostListener,
  EventEmitter,
  OnInit
} from "@angular/core";
import { GameService } from "./game.service";

@Component({
  selector: "start-button",
  templateUrl: "game.startbutton.html"
})
export class StartButtonComponent implements OnInit {
  startButtonNotClickable: boolean = false;
  @Output() buttonStartHasBeenClicked: EventEmitter<any>;

  constructor(private gameService: GameService) {
    this.buttonStartHasBeenClicked = new EventEmitter<any>();
    this.gameService.pause.subscribe((value:any)=>{
      if(value==true){
        this.startButtonNotClickable=true;
      }
    });
    gameService.endWindowIsVisible.subscribe((value: any) => {
            if(value==false){

             // this.startButtonNotClickable=false;

            }

        });
     gameService.pressStartButtonToActivateTheGame.subscribe((value: any) => {
            if(value==true){
        this.startButtonNotClickable=false;}
            // }else if(value==false){
            //           this.startButtonNotClickable=true;

            // }
        })
    this.gameService.card.subscribe((value:any)=>{
      if(value==true){

       // this.startButtonNotClickable=true;
      }
    });
  }
  ngOnInit() {}
  startHandler() {
        // this.startButtonNotClickable=false;

    if (!this.startButtonNotClickable) {
      this.startButtonNotClickable=true;
      this.buttonStartHasBeenClicked.emit();
      this.gameService.changeTimerLauncherSignal(true);
      this.gameService.changePressStartButtonToActivateTheGame(true);
    }
  }
}
