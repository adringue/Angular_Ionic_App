/////////////////////////

import {
    Component,
    ViewChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    Output,
    EventEmitter,
    Input,
    HostListener,
    AfterViewChecked
} from "@angular/core";

import { GameService } from "./game.service";
@Component({
    selector: "game-end-window",
    templateUrl: "game.endwindow.html"
})
export class GameEndWindowComponent implements OnInit {
    myMoves: number;
    showEndWindow: boolean;
    myTime:number;
    myRating: string;
    constructor(private gameService: GameService) {
        this.gameService.movesCounter.subscribe((value: any) => {
            this.myMoves = value;
            this.evaluateRating(this.myMoves);

        });
        this.gameService.getMyTime.subscribe((value:number) => {
            console.log(value);
           this.myTime = value;
           // this.essay(value);
        });
         this.gameService.checkNumberOfMatchMoves.subscribe((value: any) => {
          if(value==8){
               this.showEndWindow=true;
               gameService.changeEndWindowIsVisible(true);
          }
        });
    }

    ngOnInit() {
        this.myRating = "beginner";
        this.myMoves = 0;
        this.showEndWindow = false;
        this.myTime=0;
    }
    // essay(value:any){
    //     console.log(value);
    // }
    evaluateRating(value: any) {
        if (value == 8) {
            this.myRating = "Your are expert  keep doing a good job!";
        } else if (value > 8 && value < 20) {
            this.myRating = "keep improving!";
        } else {
            this.myRating = "you need more work!";
        }
    }
    startANewGame(){
       this.gameService.changeEndWindowIsVisible(false);
       this.gameService.changePressStartButtonToActivateTheGame(true);
      this.showEndWindow=false;
    }
}
//this new component need to be registered in app.module.ts so that we will be able
//to use it in routing later on.
