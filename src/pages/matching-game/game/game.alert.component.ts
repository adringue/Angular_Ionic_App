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
selector:'alert',
templateUrl:'game.alert.html'

})
export class AlertComponent implements OnInit{

   pauseButtonActivated:boolean;
    constructor(private gameService: GameService){
            this.gameService.pause.subscribe((value:any)=>{
      if(value==true){
        this.pauseButtonActivated=true;
      }
    });
             this.gameService.continueButton.subscribe((value:any)=>{
                  if(value==true){
        this.pauseButtonActivated=false;
                  }
           })
    }
    ngOnInit(){
        this.pauseButtonActivated=false;
    }
}
