import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Board1Component } from './components/board1/board1.component';
import { Board2Component } from './components/board2/board2.component';

@NgModule({
  declarations: [
    AppComponent,
    Board1Component,
    Board2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
