import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Idpwtab1Page } from './idpwtab1.page';

const routes: Routes = [
  {
    path: '',
    component: Idpwtab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Idpwtab1PageRoutingModule {}
