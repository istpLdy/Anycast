import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Idpwtab1PageRoutingModule } from './idpwtab1-routing.module';

import { Idpwtab1Page } from './idpwtab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Idpwtab1PageRoutingModule
  ],
  declarations: [Idpwtab1Page]
})
export class Idpwtab1PageModule {}
