import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  template: `
  <ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
      <button ion-item (click)="openPage('HomePage')">
      <ion-icon name="home"></ion-icon> Home
      </button>
        <button ion-item (click)="openPage('MoviesPage')">
        <ion-icon name="film"></ion-icon> Movies
        </button>
        <button ion-item (click)="openPage('TvShowsPage')">
        <ion-icon name="easel"></ion-icon> Tv Shows
        </button>
        <button ion-item (click)="openPage('SearchPage')">
        <ion-icon name="search"></ion-icon> Search
        </button>
        <button ion-item (click)="openPage('FavoritesPage')">
        <ion-icon name="star"></ion-icon> Favorites
        </button>
        <button ion-item menuToggle>
        <ion-icon name="ios-close-circle"></ion-icon> Close Menu
        </button>
      </ion-list>
    </ion-content>
  </ion-menu>
    <ion-nav id="navGlobal" #content [root]="rootPage"></ion-nav>
    `
})
export class MyApp {
  @ViewChild(Nav) public navGlobal: Nav;
  rootPage:string = 'HomePage';

  constructor(
    private menuCtrl: MenuController,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openPage(page: string) {
    this.menuCtrl.close();
    this.navGlobal.setRoot(page);
  }

}

