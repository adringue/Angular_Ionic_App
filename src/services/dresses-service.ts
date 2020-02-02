import {AccessoryModel} from "../models/accessoryModel";
import {DressModel} from "../models/dressModel";
export class DressesService{
     dresses: DressModel[]=[];

    addNewDress(title:string,description:string,difficulty:string,accessories:AccessoryModel[]){
        this.dresses.push(new DressModel(title,description,difficulty,accessories));
    }

    getDresses(){
        return this.dresses.slice();
    }

    updateDress(index:number,title:string,description:string,difficulty:string,accessories:AccessoryModel[]){
        this.dresses[index]=new DressModel(title,description,difficulty,accessories);

    }
    removeDress(index:number){
        this.dresses.splice(index,1);
    }
}