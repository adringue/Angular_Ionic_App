

///////////////////
import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnInit,
    Output,
    EventEmitter,
    Input,
    HostListener

} from "@angular/core";
import {
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationEvent
} from "@angular/animations";
import { GameService } from "./game.service";
@Component({
    selector: "game-card",
    templateUrl: "game.card.html",
    animations: [
        trigger("clickedState", [
            state(
                "default",
                style({
                    display: "block",
                    backgroundColor: "black",
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    fontSize: "0",
                    borderRadius: "8px",
                    transform: "scale(1)",
                    zIndex: "0"
                })
            ),

            state(
                "clicked",
                style({
                    display: "block",
                    backgroundColor: "black",
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "0%",
                    fontSize: "0",
                    borderRadius: "8px"
                    // zIndex: "4"
                    // transform:'scale(3)'
                })
            ),
            transition(
                "default=>clicked",

                animate("0.1ms 0.001ms ease-out")
            )
        ]),
        trigger("clickedState2", [
            state(
                "default2",
                style({
                    transform: "scale(1)",
                    zIndex: "0",
                     display:"flex",
                    backgroundColor:"cyan"
                })
            ),

            state(
                "clicked2",
                style({
                    display:"block",
                    zIndex: "25",
                    transform: "scale(2)",
                    backgroundColor:"cyan"
                })
            ),
            transition(
                "default2=>clicked2",

                animate("2ms 2s ease-in")
            ),
            transition(
                "clicked2=>default2",

                animate(5)
            )
        ])
    ]
})
export class GameCardComponent implements OnInit {
    myCards: any[] = [];
    clickInfo = "default";
    clickInfo2 = "default";
    startButtonActivated: boolean = false;


    noAction: boolean = false;
    @Output() collectEachCard = new EventEmitter<any>();
    @Input() cardPicture: string;
    @ViewChild("frontsideCard") frontsideCard;

    constructor(private gameService: GameService) {
        gameService.pressStartButtonToActivateTheGame.subscribe(
            (value: any) => {
                if (value == true) {
                    this.startButtonActivated = true;
                }
            }
        );
        gameService.pause.subscribe((value: any) => {
            if (value == true) {
                this.startButtonActivated = false;
            }
        });
        this.gameService.continueButton.subscribe((value: any) => {
            if (value == true) {
                this.startButtonActivated = true;
            }
        });
    }

    ngOnInit() {
        this.myCards.push(this);
        //console.log(this.myCards);
    }

    // notClickable(){
    //      this.noAction=true;
    // }
    cardClicked() {
        let me = this;
        this.gameService.changeCard(true);
        if (this.startButtonActivated) {
            this.noAction || this.animatedCard();
        }
    }

    animatedCard() {

        this.collectEachCard.emit(this);

        this.clickInfo = "clicked";

        this.animatedCardFromCloseToScale();
        this.noAction=true;
    }
    animatedCardFromCloseToScale() {
        this.clickInfo2 = "clicked2";
        setTimeout(() => {
            this.clickInfo2 = "default2";
        }, 5);
        //this.clickInfo = "default";
    }

    animatedCardAfterNotMatch() {
        setTimeout(() => {
            this.clickInfo = "default";
            this.clickInfo2 = "default";
            this.noAction=false;
        }, 400);
    }
}
