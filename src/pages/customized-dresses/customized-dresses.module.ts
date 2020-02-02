import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomizedDressesPage } from './customized-dresses';

@NgModule({
  declarations: [
    CustomizedDressesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomizedDressesPage),
  ],
})
export class CustomizedDressesPageModule {}
