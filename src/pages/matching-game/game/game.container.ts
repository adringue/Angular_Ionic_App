// import {
//     Component,
//     ViewChild,
//     AfterViewInit,
//     ElementRef,
//     OnInit,
//     Output,
//     EventEmitter,
//     Input

// } from "@angular/core";
// @Component({
// selector:'game-container',
// templateUrl:'game.container.html'

// })
// export class GameContainerComponent implements OnInit{
//     myTime1:number=0;
//     myRating1:string="debutant";
//     myMoves1:number=0;
//     constructor(){}
//   @ViewChild("mygame") mygame;
//   @ViewChild("gameendwindow") gameendwindow;
//     ngOnInit(){
// console.log(this.mygame);
//     }
//     func5(data){
//         this.myMoves1=data;
//         if(data=8){
//             this.myRating1="Your are expert  keep doing a good job!!!!!!"
//         }else if(data>8 && data<20){
//             this.myRating1="keep improving";
//         }else{
//             this.myRating1="you need more focus";
//         }
//     }
//     func3(data){
//          this.myTime1=data;
//     }
//      func9(data){
//          console.log(data);
//      if(data==8){

//            this.gameendwindow.endWindow.nativeElement.style.display='block';
//      }

//      }
//     // checkAndEndTheGame(gameData:any){

//     //    this.myTime1=gameData.elapsedTime;


//     // }
// }
// //this new component need to be registered in app.module.ts so that we will be able
// //to use it in routing later on.

//////////////////////////

import {
    Component,
    ViewChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    Output,
    EventEmitter,
    Input

} from "@angular/core";
@Component({
selector:'game-container',
templateUrl:'game.container.html'

})
export class GameContainerComponent implements OnInit{

    constructor(){}

    ngOnInit(){

    }

}
//this new component need to be registered in app.module.ts so that we will be able
//to use it in routing later on.