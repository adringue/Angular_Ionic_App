import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams,ToastController } from "ionic-angular";
import { CustomizeADressPage } from "../customize-a-dress/customize-a-dress";
import { DressModel } from "../../models/dressModel";
import { DressesService } from "../../services/dresses-service";
import { DressPage } from "../dress/dress";
/**
 * Generated class for the CustomizedDressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: "page-customized-dresses",
    templateUrl: "customized-dresses.html"
})
export class CustomizedDressesPage {
    dresses: DressModel[];
    constructor(
        private navCtrl: NavController,
        public navParams: NavParams,
        private dressesService: DressesService, private myToastCtrl: ToastController
    ) {}

    ionViewWillEnter() {
        this.dresses = this.dressesService.getDresses();
    }

    addNewDress() {
        this.navCtrl.push(CustomizeADressPage, { mode: "new" });
    }
    loadDress(dress:DressModel, index: number) {
        this.navCtrl.push(DressPage, {
            dress: dress,
            index: index
        });
       // console.log(dress);
    }
    essay(t:number){
        console.log(t);
    }
}