/////////////////////////////

import { ElementRef, Injectable, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Observer } from "rxjs";
import { Subscription } from "rxjs";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
// import {GameCardComponent} from "./game.card.component";
// import {MovesComponent} from "./game.move";
// import {StarsComponent} from "./game.stars";

// //import {TimerComponent} from"./game.timer";
// @Injectable;
export class GameService {
    //result:any;
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

    private _board: BehaviorSubject<any>;
    private _timerLauncherSignal: BehaviorSubject<boolean>;
    private _movesCounter: BehaviorSubject<any>;
    private _alertSignal: BehaviorSubject<boolean>;
    private _stars: BehaviorSubject<any>;
    private _continueButton: BehaviorSubject<boolean>;
    private _pause: BehaviorSubject<any>;
    private _card: BehaviorSubject<any>;
    private _resetTimerLauncherSignal = new BehaviorSubject<boolean>(false);
    private _resetCardsMatch: BehaviorSubject<any>;
    private _pressStartButtonToActivateTheGame: BehaviorSubject<any>;
    private _resetStarsColor: BehaviorSubject<any>;
    private _getMyTime: BehaviorSubject<any>;
    private _checkNumberOfMatchMoves: BehaviorSubject<any>;
    private _EndWindowIsVisible: BehaviorSubject<any>;


    constructor() {
        this._board = new BehaviorSubject<any>(null);
        this._timerLauncherSignal = new BehaviorSubject<boolean>(false);
        this._movesCounter = new BehaviorSubject<any>(null);
        this._alertSignal = new BehaviorSubject<boolean>(false);
        this._stars = new BehaviorSubject<any>(null);
        this._continueButton = new BehaviorSubject<boolean>(false);
        this._pause = new BehaviorSubject<any>(null);
        this._card = new BehaviorSubject<any>(null);
        this._resetTimerLauncherSignal = new BehaviorSubject<boolean>(false);
        this._resetCardsMatch = new BehaviorSubject<any>(null);
        this._pressStartButtonToActivateTheGame = new BehaviorSubject<any>(null);
        this._resetStarsColor = new BehaviorSubject<any>(null);
        this. _getMyTime=new BehaviorSubject<any>(null);
        this. _checkNumberOfMatchMoves=new BehaviorSubject<any>(null);
        this. _EndWindowIsVisible=new BehaviorSubject<any>(null);



    }
    ////////////////board reloading////////////////
    get board() {
        return this._board;
    }

    changeBoard(newVal: any) {
        this._board.next(newVal);
        return this._board;
    }

    //////////timeractivation/////////////
    get timerLauncherSignal() {
        return this._timerLauncherSignal;
    }

    changeTimerLauncherSignal(newVal: boolean) {
        this._timerLauncherSignal.next(newVal);
    }
    //  1)
    get movesCounter() {
        return this._movesCounter;
    }

    changeMovesCounter(newVal: any) {
        this._movesCounter.next(newVal);
    }
    // 2)
    get alertPause() {
        return this._alertSignal;
    }

    changeAlertPause(newVal: any) {
        this._alertSignal.next(newVal);
        return this._alertSignal;
    }
    //3)
    get stars() {
        return this._stars;
    }

    changeStars(newVal: any) {
        this._stars.next(newVal);
        return this._stars;
    }
    //4)
    get continueButton() {
        return this._continueButton;
    }

    changeContinueButton(newVal: any) {
        this._continueButton.next(newVal);
        return this._continueButton;
    }
    //5)
    get pause() {
        return this._pause;
    }

    changePause(newVal: any) {
        this._pause.next(newVal);
        return this._pause;
    }
    //6)
    get card() {
        return this._card;
    }

    changeCard(newVal: any) {
        this._card.next(newVal);
        return this._card;
    }
    // 7)

    get resetTimerLauncherSignal() {
        return this._resetTimerLauncherSignal;
    }

    changeResetTimerLauncherSignal(newVal: boolean) {
        this._resetTimerLauncherSignal.next(newVal);
    }
    //8)
    get resetCardsMatch() {
        return this._resetCardsMatch;
    }

    changeResetCardsMatch(newVal: any) {
        this._resetCardsMatch.next(newVal);
    }
    //9)
    get pressStartButtonToActivateTheGame() {
        return this._pressStartButtonToActivateTheGame;
    }

    changePressStartButtonToActivateTheGame(newVal: any) {
        this._pressStartButtonToActivateTheGame.next(newVal);
    }
    //10
    get resetStarsColor() {
        return this._resetStarsColor;
    }

    changeResetStarsColor(newVal: any) {
        this._resetStarsColor.next(newVal);
    }
    //11
    get getMyTime() {
        return this._getMyTime;
    }

    changeGetMyTime(newVal: any) {
        this._getMyTime.next(newVal);
    }
    //12
    get checkNumberOfMatchMoves() {
        return this._checkNumberOfMatchMoves;
    }

    changeCheckNumberOfMatchMoves(newVal: any) {
        this._checkNumberOfMatchMoves.next(newVal);
    }
    //13
    get endWindowIsVisible() {
        return this._EndWindowIsVisible;
    }

    changeEndWindowIsVisible(newVal: any) {
        this._EndWindowIsVisible.next(newVal);
    }
    /////////////////////////////////////

    shuffleMyPictureCollection(value: string[]) {
        let currentIndex = value.length,
            temporaryValue,
            randomIndex;
        while (0 != currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = value[currentIndex];
            value[currentIndex] = value[randomIndex];
            value[randomIndex] = temporaryValue;
        }
        return value;
    }
}
