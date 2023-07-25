import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdpwtabsPage } from './idpwtabs.page';

const routes: Routes = [
  {
    path: 'idpwtabs',
    component: IdpwtabsPage,
    children:[
      {
        path:'idpwtab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../idpwtab1/idpwtab1.module').then( m => m.Idpwtab1PageModule)
          }
        ]
      },
      {
        path:'idpwtab2',
        children:[
          {
            path:'',
            loadChildren: () => import('../idpwtab2/idpwtab2.module').then( m => m.Idpwtab2PageModule)
          }
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo:'idpwtabs/idpwtab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdpwtabsPageRoutingModule {}
