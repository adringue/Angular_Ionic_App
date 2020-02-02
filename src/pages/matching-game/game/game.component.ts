// import { Component, OnInit, Input } from "@angular/core";
// import { CardService } from "./card.service";
// @Component({
//     selector: "app-game",
//     templateUrl: "./game.component.html",
//     styleUrls: ["./game.component.css"]
//    // providers: [CardService]
// })
// export class GameComponent implements OnInit {
//     myPicture: string = "muster";
//     constructor(private cardService: CardService) {}
//     essay() {
//         // this.cardService.ngAfterViewChecked();
//         this.cardService.getFrontSidePictureName();
//     }

//     ngOnInit() {
//         //this.cardService.drawACard({});
//         //this.cardService.getFrontSidePictureName();
//     }
// }

import { Component, OnInit, Input } from "@angular/core";
//import { CardService } from "./card.service";
@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"]
   // providers: [CardService]
})
export class GameComponent implements OnInit {

    constructor() {}



    ngOnInit() {

    }
}