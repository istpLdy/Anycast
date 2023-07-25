import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Idpwtab2PageRoutingModule } from './idpwtab2-routing.module';

import { Idpwtab2Page } from './idpwtab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Idpwtab2PageRoutingModule
  ],
  declarations: [Idpwtab2Page]
})
export class Idpwtab2PageModule {}
