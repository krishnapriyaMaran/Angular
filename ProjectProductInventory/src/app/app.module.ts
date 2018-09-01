import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { RestComponent } from './rest/rest.component';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,Menu1Component, Menu2Component

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
                           { path:'menu1',component :Menu1Component},
                           { path:'menu2' , component: Menu2Component}
                         ]),HttpModule
  ],
  providers: [RestComponent],
  bootstrap: [AppComponent],
 
  
})


export class AppModule { }
