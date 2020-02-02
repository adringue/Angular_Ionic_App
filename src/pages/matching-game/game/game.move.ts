

//////////////////////////////////

import {Component,Input,Output,ViewChild,OnInit,EventEmitter,AfterViewChecked} from "@angular/core";
import { GameService } from "./game.service";
@Component({
selector:'moves',
templateUrl:'game.move.html'

})
export class MovesComponent implements OnInit{
       numberMoves:number;

    constructor(private gameService: GameService){
        gameService.movesCounter.subscribe((value:any)=>{
           this.numberMoves=value;
        })
        this.gameService.endWindowIsVisible.subscribe((value: boolean) => {
                 if (value == false) {
               this.gameService.changeMovesCounter(0);
           // this.numberMoves=0;
            }
        });
    }
    ngOnInit(){
             this.numberMoves=0;


    }
      ngAfterViewChecked(){

      }

 }