// //import { Injectable } from "@angular/core";
// //declare var $: any;

// //@Injectable()
// export class CardService {
//   //me.cardPictureName = cardPictureName;
//   mySelectedCards = [];
//   li = null;
//   liBackSide = null;
//   frontSideDiv = null;
//   backSideDiv = null;
//   frontAndBacksideDiv = null;
//   iElmt = null;
//   myselectedCards: any = [];
//   signalAnimateCardClosedHasCompleted: boolean = false;
//   signalAnimateCardOpenedHasCompleted: boolean = false;
//   cardPictureNameObjectLiteral: any = {};
//   signalAnimateCardIsHidden: boolean = false;

//   constructor() {}
//   drawACard(cardPictureNameobjectliteral) {
//     // cardPictureNameobjectliteral.name; // myPicture whithin string interpolation
//     var me: this;
//     this.li = document.createElement("li");
//     this.iElmt = document.createElement("i");
//     this.liBackSide = document.createElement("li");
//     this.frontAndBacksideDiv = document.createElement("div");
//     this.frontSideDiv = document.createElement("div");
//     this.backSideDiv = document.createElement("div");
//     this.frontSideDiv.classList.add("card");
//     this.frontSideDiv.classList.add("frontside");
//     this.backSideDiv.classList.add("card");
//     this.backSideDiv.classList.add("backside");
//     this.frontAndBacksideDiv.appendChild(this.frontSideDiv);
//     this.frontAndBacksideDiv.appendChild(this.backSideDiv);
//     this.frontAndBacksideDiv.classList.add("frontandbacksidediv");
//     this.li.classList.add("cardContainer");
//     this.iElmt.classList.add("fa");
//     this.iElmt.classList.add("fa-" + this.cardPictureNameObjectLiteral.name);
//     this.iElmt.classList.add("picture");
//     this.frontSideDiv.appendChild(this.iElmt);
//     this.li.appendChild(this.frontAndBacksideDiv);
//     return this.li;
//   }
//   ngAfterViewChecked() {
//     $(".backside").hide();
//   }
//   getFrontSidePictureName() {
//     // $(".backside").css("background-color","blue");
//     // console.log($(".frontside").find("i").eq(0).attr("class"));

//    // return ($($(".frontside").find("i")[0]).attr("class"));
//     return ($($(this.iElmt).find("i")[0]).attr("class"));
//   }
//   triggerEventName(cardIsClosedString, data) {
//     $(this.li).trigger(cardIsClosedString, data);
//   }
//   onEventName(cardIsClosedString, cb) {
//     var me: this;
//     $(this.li).on(cardIsClosedString, function(evt, data) {
//       cb(data);
//     });
//   }
//   hideAcard() {

//     this.signalAnimateCardIsHidden = true;
//     $(this.frontSideDiv).hide();
//     $(this.backSideDiv).show();
//     $(this.frontSideDiv).css("background-color","cyan");
//     angular.element()
//   }
//   animateLiElement
// }