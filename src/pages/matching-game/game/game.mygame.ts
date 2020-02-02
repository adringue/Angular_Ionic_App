/////////////////////////////////

import {
    Component,
    ViewChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    Output,
    EventEmitter,
    Input,
    AfterViewChecked,
    OnChanges,
    AfterContentInit
} from "@angular/core";

import { GameService } from "./game.service";
@Component({
    selector: "my-game",
    templateUrl: "game.mygame.html"
})
export class MyGameComponent implements OnInit, AfterViewChecked {
    myGameContainerIsVisible: boolean;
    constructor(private gameService: GameService) {
        gameService.endWindowIsVisible.subscribe((value: any) => {
            if(value==true){
              this.myGameContainerIsVisible = false;
            }else{
             this.myGameContainerIsVisible = true;

            }

        });
    }
    ngOnInit() {
        this.myGameContainerIsVisible = true;
    }

    ngAfterViewChecked() {}

    launchTimerHelper() {}
}