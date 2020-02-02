
/////////////////////////////

import {
    Component,
    Input,
    OnInit,
    AfterViewInit,
    ViewChild,
    EventEmitter,
    Output

} from "@angular/core";

import { GameService } from "./game.service";
import { trigger, state } from "@angular/animations";

@Component({
    selector: "timer",
    templateUrl: "game.timer.html",
    animations: []
})
export class TimerComponent implements OnInit, AfterViewInit {
    launchMyTimer = new EventEmitter<any>();
   // mySubscription: Subscription;
    counterContinue:number=0;
    intervalId: any;
    counter: number = 0;
    constructor(private gameService: GameService) {
        this.gameService.timerLauncherSignal.subscribe((value: boolean) => {
                 if (value == true) {
                this.start();
            }
        });
         this.gameService.resetTimerLauncherSignal.subscribe((value: boolean) => {
                 if (value == true) {
                this.stop();
            }
        });
          this.gameService.endWindowIsVisible.subscribe((value: boolean) => {
                 if (value) {
                this.stopCounterNotReset();
            }else{
                this.hardStop();
            }
        });
          this.gameService.pause.subscribe((value:any)=>{
                  if(value==true){
                      this.stopCounterNotReset();
                  }
           })
          this.gameService.continueButton.subscribe((value:any)=>{
                  if(value==true){
                      this.startContinue();
                  }
           })

    }
    ngOnInit() {}
    ngAfterViewInit() {}

    start() {
        this.intervalId = setInterval(() => {
            this.increaseCounter();
        }, 1000);
    }

    increaseCounter() {
        this.counter++;
        //console.log(typeof(this.counter));
        this.gameService.changeGetMyTime(this.counter);
    }

    gameEndChecker() {}

    outputCounterPosition() {
        //     return this.counter;
    }
    hardStop(){
         clearInterval(this.intervalId);
         this.counter=0;
    }
    stop() {
         clearInterval(this.intervalId);
         this.counter=0;
         this.start();
        // this.outputCounter.nativeElement.innerText=0
    }
    stopCounterNotReset() {
         clearInterval(this.intervalId);
          this.counterContinue=this.counter;
    }
    increaseCounterContinue() {
        // this.counterContinue++;
        // this.outputCounter.nativeElement.innerText=this.counter;
    }
    startContinue() {
            this.intervalId = setInterval(() => {
                this.counter++;
                //this.increaseCounterContinue();
            }, 1000);
    }
}