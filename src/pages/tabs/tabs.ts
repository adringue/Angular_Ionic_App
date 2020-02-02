import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomizedDressesPage } from "../customized-dresses/customized-dresses";
import { MatchingGamePage } from "../matching-game/matching-game";
import { ShoppingListPage } from "../shopping-list/shopping-list";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
slPage=ShoppingListPage;
matchingGame=MatchingGamePage;
customizedDresses=CustomizedDressesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
