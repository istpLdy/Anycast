import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdpwtabsPageRoutingModule } from './idpwtabs-routing.module';

import { IdpwtabsPage } from './idpwtabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdpwtabsPageRoutingModule
  ],
  declarations: [IdpwtabsPage]
})
export class IdpwtabsPageModule {}
