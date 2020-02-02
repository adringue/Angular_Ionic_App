import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shoppinglist-service";
import { AccessoryModel } from "../../models/accessoryModel";
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
 listAccessories:AccessoryModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private slService: ShoppingListService) {
  }

  ionViewWillEnter() {
      this.loadAccessories();
  }
  addAccessory(form: NgForm){
   this.slService.addAccessory(form.value.accessoryName,form.value.amount,form.value.color,form.value.length);
   form.reset();
   this.loadAccessories(); // actualiser les valeurs changees
  }
   checkAccessories(index:number){
       this.slService.removeAccessory(index);
   }
   private loadAccessories(){
       this.listAccessories=this.slService.getAccessories();
   }
}
