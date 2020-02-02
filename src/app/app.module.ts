import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { CustomizeADressPage } from "../pages/customize-a-dress/customize-a-dress";
import { CustomizedDressesPage } from "../pages/customized-dresses/customized-dresses";
import { DressPage } from "../pages/dress/dress";
import { MatchingGamePage } from "../pages/matching-game/matching-game";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { TabsPage } from "../pages/tabs/tabs";
import{DressesService} from "../services/dresses-service";
import{ShoppingListService} from "../services/shoppinglist-service";
import { MyApp } from "./app.component";
////////////Game Component//////////
import {GameContainerComponent} from "../pages/matching-game/game/game.container";
import {GameEndWindowComponent} from "../pages/matching-game/game/game.endwindow";
import {GameBoardComponent} from "../pages/matching-game/game/game.gameboard";
import {MovesComponent} from "../pages/matching-game/game/game.move";
import {MyGameComponent} from "../pages/matching-game/game/game.mygame";
import {RestartComponent} from "../pages/matching-game/game/game.restart";
import {StartButtonComponent} from "../pages/matching-game/game/game.startbutton";
import {StarsComponent} from "../pages/matching-game/game/game.stars";
import {TimerComponent} from "../pages/matching-game/game/game.timer";
 import {GameCardComponent} from "../pages/matching-game/game/game.card.component";
import {GameService} from "../pages/matching-game/game/game.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ PauseComponent} from "../pages/matching-game/game/game.pause.component";
import {AlertComponent}from "../pages/matching-game/game/game.alert.component";
import{ContinueButtonComponent} from"../pages/matching-game/game/game.continueButton.component";

@NgModule({
  declarations: [
    MyApp,
    CustomizeADressPage,
    CustomizedDressesPage,
    DressPage,
    MatchingGamePage,
    ShoppingListPage,
    TabsPage,
    ContinueButtonComponent,

    PauseComponent,
    AlertComponent,

    GameContainerComponent,
    GameEndWindowComponent,
    GameBoardComponent,
    MovesComponent,
    MyGameComponent,
    RestartComponent,
    StartButtonComponent,
    StarsComponent,
    TimerComponent,
    GameCardComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomizeADressPage,
    CustomizedDressesPage,
    DressPage,
    MatchingGamePage,
    ShoppingListPage,
    TabsPage
  ],
  exports: [
    GameContainerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DressesService, ShoppingListService, GameService
  ]
})
export class AppModule {}
