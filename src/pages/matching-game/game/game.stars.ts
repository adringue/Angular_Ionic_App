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
    selector: "stars",
    templateUrl: "game.stars.html"
})
export class StarsComponent implements OnInit {
    // @ts-ignore
  @ViewChild("firstStar") firstStar;
    // @ts-ignore
  @ViewChild("secondStar") secondStar;
    // @ts-ignore
  @ViewChild("thirdStar") thirdStar;

    // @ts-ignore
  @ViewChild("allStar") allStar;

    constructor(private gameService: GameService) {
        gameService.stars.subscribe((value:any)=>{
            this.adjustStars(value);
        })
         gameService.resetStarsColor.subscribe((value:any)=>{
             if(value==true){
            this.resetColor();
        }
        })
          this.gameService.endWindowIsVisible.subscribe((value: boolean) => {
                 if (value == true) {
              this.resetColor();
            }
        });

    }
    ngOnInit() {}
    adjustStars(value: number) {
       if(this.firstStar && this.secondStar && this.thirdStar){
        if (value == 8) {
            this.firstStar.nativeElement.style.color = "white";
            this.secondStar.nativeElement.style.color = "white";
            this.thirdStar.nativeElement.style.color = "white";
        } else if (value == 2) {
            this.thirdStar.nativeElement.style.color = "white";
        } else if (value == 5) {
            this.secondStar.nativeElement.style.color = "white";
            this.thirdStar.nativeElement.style.color = "white";
        }
    }
}

    resetColor() {
        this.firstStar.nativeElement.style.color = "black";
        this.secondStar.nativeElement.style.color = "black";
        this.thirdStar.nativeElement.style.color = "black";
    }
}
// //this new component need to be registered in app.module.ts so that we will be able
// //to use it in routing later on.

//////////////////////////
