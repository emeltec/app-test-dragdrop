import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Board1Component } from './components/board1/board1.component';
import { Board2Component } from './components/board2/board2.component';
import { Board3Component } from './components/board3/board3.component';
import { PanelOneComponent } from './components/panel-one/panel-one.component';
import { Board4Component } from './components/board4/board4.component';
import { Board5Component } from './components/board5/board5.component';
import { UserComponent } from './shared/user/user.component';
import { DetailComponent } from './shared/detail/detail.component';
import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Board1Component,
    Board2Component,
    Board3Component,
    PanelOneComponent,
    Board4Component,
    Board5Component,
    UserComponent,
    DetailComponent,
    StringifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
