import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TodoboardPageModule } from './pages/todoboard/todoboard.module';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,TodoboardPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GlobalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
