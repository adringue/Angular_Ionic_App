import { Component ,OnInit} from "@angular/core";
import { IonicPage, NavController, NavParams,ToastController } from "ionic-angular";
import { CustomizeADressPage } from "../customize-a-dress/customize-a-dress";

import { MatchingGamePage } from "../matching-game/matching-game";
import { ShoppingListPage } from "../shopping-list/shopping-list";
import{ShoppingListService} from "../../services/shoppinglist-service";
import{DressModel} from "../../models/dressModel";
import { DressesService } from "../../services/dresses-service";
/**
 * Generated class for the DressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: "page-dress",
    templateUrl: "dress.html"
})
export class DressPage implements OnInit {
    dress:DressModel;
    index: number;
    constructor(public navCtrl: NavController, public navParams: NavParams,private slService:ShoppingListService,private dressesService:DressesService, private myToastCtrl: ToastController) {}

   ngOnInit(){
       this.dress=this.navParams.get("dress");
       this.index=this.navParams.get("index");
   }
   editDress(){
       this.navCtrl.push(CustomizeADressPage,{
           mode:"Edit",
           dress:this.dress,
           index:this.index
       });
   }
   addAccessories(){
       this.slService.addAccessories(this.dress.accessories);
        const myToast = this.myToastCtrl.create({
             message: "Accessorie(s) Added in the shopping list",
             duration: 1600,
             position: "right"
                            });
                            myToast.present();
   }
   deleteDress(){
       this.dressesService.removeDress(this.index);
       this.navCtrl.popToRoot();
   }
}