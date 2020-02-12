import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './home-pg/home-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
