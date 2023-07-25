import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'my-page',
    loadChildren: () => import('./my-page/my-page.module').then( m => m.MyPagePageModule)
  },
  {
    path: 'editinfo',
    loadChildren: () => import('./editinfo/editinfo.module').then( m => m.EditinfoPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'idpwtabs',
    loadChildren: () => import('./idpwtabs/idpwtabs.module').then( m => m.IdpwtabsPageModule)
  },
  {
    path: 'idpwtab1',
    loadChildren: () => import('./idpwtab1/idpwtab1.module').then( m => m.Idpwtab1PageModule)
  },
  {
    path: 'idpwtab2',
    loadChildren: () => import('./idpwtab2/idpwtab2.module').then( m => m.Idpwtab2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
