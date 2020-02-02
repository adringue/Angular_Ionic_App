

////////////////////////////////

import { Component, Input, ViewChild, OnInit,HostListener } from "@angular/core";

import { GameService } from "./game.service";

@Component({
    selector: "continue",
    templateUrl: "game.continueButton.html"
})
export class ContinueButtonComponent implements OnInit {
    pauseButtonActivated:boolean;

    constructor(private gameService: GameService) {
          this.gameService.pause.subscribe((value:any)=>{
      if(value==true){
        this.pauseButtonActivated=true;
      }
    });
    }
    ngOnInit() {
        this.pauseButtonActivated=false;
    }
     continueButtonHandler(){
         this.gameService.changeContinueButton(true);
         this.pauseButtonActivated=false;
     }
}