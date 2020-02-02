import { AccessoryModel } from "../models/accessoryModel";
export class ShoppingListService {
    private accessories: AccessoryModel[] = [];
    addAccessory(name: string, amount: number, color: string, length: number) {
        this.accessories.push(new AccessoryModel(name, amount, color, length));
    }
    addAccessories(items: AccessoryModel[]) {
        this.accessories.push(...items);
    }
    getAccessories() {
        return this.accessories.slice(); // return a copy
    }
    removeAccessory(index: number) {
        this.accessories.splice(index, 1);
    }
}