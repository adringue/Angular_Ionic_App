import { Component } from "@angular/core";
import {
    IonicPage,
    NavController,
    NavParams,
    ActionSheetController,
    ToastController,
    AlertController
} from "ionic-angular";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { DressesService } from "../../services/dresses-service";
import { DressModel } from "../../models/dressModel";

@IonicPage()
@Component({
    selector: "page-customize-a-dress",
    templateUrl: "customize-a-dress.html"
})
export class CustomizeADressPage {
    mode = "new";
    selectOptions = ["Easy", "Medium", "Hard"];
    dressForm: FormGroup;
    dress: DressModel;
    index: number;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private actionSheetController: ActionSheetController,
        private dressesServices: DressesService,
        private myToastCtrl: ToastController,
        private myAlertCtrl: AlertController
    ) {}

    ngOnInit() {
        this.mode = this.navParams.get("mode");
        if (this.mode == "Edit") {
            this.dress = this.navParams.get("dress");
            this.index = this.navParams.get("index");
        }
        this.initializeForm();
    }
    onSubmit() {
        const value = this.dressForm.value;
        console.log(value);
        //let accessories=[];
        if (this.mode == "Edit") {
            // index est le nouveau index capture par navparams
            this.dressesServices.updateDress(
                this.index,
                value.title,
                value.description,
                value.difficulty,
                value.accessories
            );
        } else {
            this.dressesServices.addNewDress(
                value.title,
                value.description,
                value.difficulty,
                value.accessories
            );
        }
        this.dressForm.reset();
        this.navCtrl.popToRoot();
    }
    manageAccessories() {
        const myActionSheet = this.actionSheetController.create({
            title: "Next Step:",
            buttons: [
                {
                    text: "Add Accessory",
                    handler: () => {
                        this.createNewAccessoryAlert().present();
                    }
                },
                {
                    text: "Remove all Accessories",
                    role: "destructive",
                    handler: () => {
                        const myFormArray: FormArray = this.dressForm.get(
                            "accessories"
                        ) as FormArray;
                        const len = myFormArray.length;
                        if (len > 0) {
                            for (let i = len - 1; i >= 0; i--) {
                                myFormArray.removeAt(i);
                            }
                            const myToast = this.myToastCtrl.create({
                                message: "All Accessories were destroyed!",
                                duration: 1200,
                                position: "right"
                            });
                            myToast.present();
                        }
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel"
                }
            ]
        });
        myActionSheet.present();
    }

    private createNewAccessoryAlert() {
        return this.myAlertCtrl.create({
            title: "add Accessories",
            inputs: [
                {
                    name: "name",
                    placeholder: "Name"
                },

                {
                    name: "amount",
                    placeholder: "Amount",
                    type: "number"
                },
                {
                    name: "color",
                    placeholder: "color"
                },

                {
                    name: "length",
                    placeholder: "length",
                    type: "number"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel"
                },
                {
                    text: "Add",
                    handler: data => {
                        // let dataToNumber=Number(data.amount);
                        if (
                            data.name.trim() == "" ||
                            data.name == null ||
                            (data.amount.trim() == "" || data.amount == null) ||
                            (data.color.trim() == "" || data.color == null) ||
                            (data.length.trim() == "" || data.length == null)
                        ) {
                            const myToast = this.myToastCtrl.create({
                                message: "Please enter a valid value",
                                duration: 1600,
                                position: "top"
                            });
                            myToast.present();
                            return;
                        }
                        (this.dressForm.get("accessories") as FormArray).push(
                            new FormGroup({
                                name: new FormControl(
                                    data.name,
                                    Validators.required
                                ),
                                amount: new FormControl(
                                    Number(data.amount),
                                    Validators.required
                                ),
                                color: new FormControl(
                                    data.color,
                                    Validators.required
                                ),
                                length: new FormControl(
                                    data.length,
                                    Validators.required
                                )
                            })
                        );
                        const myToast2 = this.myToastCtrl.create({
                            message: "Item added",
                            duration: 1600,
                            position: "top"
                        });
                        myToast2.present();
                    }
                }
            ]
        });
    }

    // initializing my form

    private initializeForm() {
        let title = null;
        let description = null;
        let difficulty = "Medium";
        let accessories = [];

        // if (this.mode = "Edit") {
        //     title = this.dress.title;
        //     description = this.dress.description;
        //     difficulty = this.dress.difficulty;
        //     for (let accessory of this.dress.accessories) {
        //         accessories.push(
        //             new FormGroup({
        //                 name: new FormControl(
        //                     accessory.name,
        //                     Validators.required
        //                 ),
        //                 amount: new FormControl(
        //                     Number(accessory.amount),
        //                     Validators.required
        //                 ),
        //                 color: new FormControl(
        //                     accessory.color,
        //                     Validators.required
        //                 ),
        //                 length: new FormControl(
        //                     accessory.length,
        //                     Validators.required
        //                 )
        //             })
        //         );
        //     }
        // }
        this.dressForm = new FormGroup({
            title: new FormControl(title, Validators.required),
            description: new FormControl(description, Validators.required),
            difficulty: new FormControl(difficulty, Validators.required),
            accessories: new FormArray(accessories)
        });
    }
}