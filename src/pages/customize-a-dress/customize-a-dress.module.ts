import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomizeADressPage } from './customize-a-dress';

@NgModule({
  declarations: [
    CustomizeADressPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomizeADressPage),
  ],
})
export class CustomizeADressPageModule {}
