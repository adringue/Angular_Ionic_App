

//////////////////////////////

import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  HostListener,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";
import { GameService } from "./game.service";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Observer } from "rxjs";

@Component({
  selector: "restart",
  templateUrl: "game.restart.html"
})
export class RestartComponent implements AfterViewInit, OnInit {
  testVl: boolean = true;
  newArray: any;
  resetButtonNotClickable:boolean=true;
  @Output() fieldArray: EventEmitter<any> = new EventEmitter();
  constructor(private gameService: GameService) {

   this.gameService.pause.subscribe((value:any)=>{
      if(value==true){
        this.resetButtonNotClickable=true;
      }
    })
   this.gameService.continueButton.subscribe((value:any)=>{
                  if(value==true){
        this.resetButtonNotClickable=false;
                  }
           })
    gameService.pressStartButtonToActivateTheGame.subscribe((value: any) => {
            if(value==true){
              this.resetButtonNotClickable=false;
            }
        });
  }

  ngOnInit() {
    //this.click.emit(9998);
  }
  ngAfterViewInit() {}
  sendResetCardsSignal() {
    if(!this.resetButtonNotClickable){
    this.newArray = this.gameService.shuffleMyPictureCollection(
      this.gameService.picturesCollection
    );
        this.fieldArray.emit(this.newArray);
     this.gameService.changeResetStarsColor(true);
    this.gameService.changeMovesCounter(0);
    this.gameService.changeResetTimerLauncherSignal(true);
    this.gameService.changeResetCardsMatch(true);
     this.gameService.changeBoard(this.gameService.picturesCollection);

  }
}

}
