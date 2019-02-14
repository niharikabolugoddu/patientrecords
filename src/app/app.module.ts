
import { AppComponent }     from './app.component';
 
import { NgModule }       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { ListsComponent } from './lists/lists.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    ListsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

 }