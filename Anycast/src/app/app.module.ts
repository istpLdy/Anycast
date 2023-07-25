import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';
import { ToastController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // BluetoothLE, // BluetoothLE 프로바이더 추가
    ToastController, // ToastController 프로바이더 추가
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
