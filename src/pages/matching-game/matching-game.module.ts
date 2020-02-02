import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchingGamePage } from './matching-game';
import {AppModule} from "../../app/app.module";

@NgModule({
  declarations: [
    MatchingGamePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchingGamePage),
    AppModule,
  ],
})
export class MatchingGamePageModule {}
