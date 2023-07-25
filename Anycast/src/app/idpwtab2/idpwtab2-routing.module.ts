import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Idpwtab2Page } from './idpwtab2.page';

const routes: Routes = [
  {
    path: '',
    component: Idpwtab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Idpwtab2PageRoutingModule {}
