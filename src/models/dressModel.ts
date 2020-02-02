import { AccessoryModel } from "./accessoryModel";
export class DressModel {
    constructor(
        public title: string,
        public description: string,
        public difficulty: string,
        public accessories: AccessoryModel[]
    ) {}}
