import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  
  constructor(private menuCtrl: MenuController) {}

  closeMenu() {
    this.menuCtrl.close();
  }

  ngOnInit() {
  }

  // CloseMenu() {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const closeBtn = document.querySelector('.close-menu') as HTMLImageElement;
  //     closeBtn.addEventListener('click', () => {
  //       const menu = document.querySelector('ion-menu') as HTMLIonMenuElement;
  //       menu.close();
  //     });
  //   });
  // }

}
