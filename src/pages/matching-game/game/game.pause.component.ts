

///////////////////////////////////////

import {
    Component,
    Input,
    ViewChild,
    OnInit,
    HostListener,
    ElementRef
} from "@angular/core";

import { GameService } from "./game.service";
@Component({
    selector: "pause",
    templateUrl: "game.pause.html"
})
export class PauseComponent implements OnInit {
     pauseButtonEnabled:boolean;

    constructor(private gameService: GameService) {

         this.gameService.pressStartButtonToActivateTheGame.subscribe((value:any)=>{
      if(value==true){
       this.pauseButtonEnabled=true;
      }
    });
    }

    ngOnInit() {
             this.pauseButtonEnabled=false;

    }

    pauseHandler(){
        if(this.pauseButtonEnabled){
        this.gameService.changePause(true);
    }
    }
}