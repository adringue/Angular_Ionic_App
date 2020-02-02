import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener
} from "@angular/core";

import { GameService } from "./game.service";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Observer } from "rxjs";
import { Subscription } from "rxjs";
import { Subject } from "rxjs";

@Component({
  selector: "gameboard",
  templateUrl: "game.gameboard.html"
})
export class GameBoardComponent implements OnInit {
  myClickedCards: any[] = [];
  matchCards: any[] = [];
  notMatchCards: any[] = [];
  arrayOfPictures: string[] = [];
  compareTwoCardsArray: any[] = [];
  mySubscription: Subscription;
  mySubscription2: Subscription;
  matchMoves: number = 0;
  notMatchMoves: number = 0;
  totalMoves: number = 0;
  picturesCollection: string[] = [
    "diamond",
    "paper-plane-o",
    "anchor",
    "bolt",
    "cube",
    "anchor",
    "leaf",
    "bicycle",
    "diamond",
    "bomb",
    "leaf",
    "bomb",
    "bolt",
    "bicycle",
    "paper-plane-o",
    "cube"
  ];

  constructor(private gameService: GameService) {
    gameService.resetCardsMatch.subscribe((value: any) => {
      if (value === true) {
        this.resetMatchCards();
      }
    });
    this.gameService.movesCounter.subscribe((value:number) => {
      if(value==0){
        this.matchMoves=0;
        this.notMatchMoves=0;
        this.totalMoves=0;
      }
    });
    this.gameService.endWindowIsVisible.subscribe((value: boolean) => {
      let me = this;
      if (value == true) {
        setTimeout(function() {
          console.log("visibility");
          this.totalMoves=0;
          me.resetMatchCards();
        }, 1);
      }
    });
  }

  ngOnInit() {
    this.arrayOfPictures = this.gameService.shuffleMyPictureCollection(
      this.picturesCollection
    );
    this.mySubscription = this.gameService.board.subscribe((pictures: any) => {
      if (pictures) {
        this.arrayOfPictures = this.gameService.shuffleMyPictureCollection(
          pictures
        );
      }
    });
  }

  collectClickedCard(data) {
    this.myClickedCards.push(data);
    this.compareTwoCardsArray.push(data);
    this.compareTwoCards(this.compareTwoCardsArray);

    //this.myClickedCards[0].animatedCard2();
    //console.log(this.myClickedCards[0]);
  }
  setMyArray(value: string) {
    this.arrayOfPictures.push(value);
    //console.log(this.arrayOfPictures);
  }

  compareTwoCards(value: any[]) {
    if (value.length == 2) {
      if (value[0].cardPicture === value[1].cardPicture) {
        this.matchMoves++;

        // for (let entry in this.matchCards) {
        //   this.matchCards[entry].clickInfo = "clicked";
        //   this.matchCards[entry].noAction = true;
        // }
        value[0].clickInfo = "clicked";
        value[1].clickInfo = "clicked";
        value[0].noAction = true;
        value[1].noAction = true;
        this.matchCards.push(value[0]);
        this.matchCards.push(value[1]);
        this.gameService.changeStars(this.matchMoves);
        this.gameService.changeCheckNumberOfMatchMoves(this.matchMoves);
      } else {
        //
        this.notMatchMoves++;
        value[0].animatedCardAfterNotMatch();
        value[1].animatedCardAfterNotMatch();
        this.notMatchCards.push(value[0]);
        this.notMatchCards.push(value[1]);
      }
      this.totalMoves = this.matchMoves + this.notMatchMoves;
      this.gameService.changeMovesCounter(this.totalMoves);
      this.compareTwoCardsArray = [];
    }
  }
  resetMatchCards() {
    for (let entry in this.myClickedCards) {
      this.myClickedCards[entry].clickInfo = "default";
      this.myClickedCards[entry].clickInfo2 = "default";
      this.myClickedCards[entry].noAction = false;
      this.myClickedCards[entry].noAction = false;
      if (this.compareTwoCardsArray.length == 1) {
        this.compareTwoCardsArray = [];
      }
    }
  }
}
