import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { StarwarsApiService } from './services/starwars-api.service';
import { SinglePersonComponent } from './components/people-list/single-person/single-person.component'
import { BootResolver } from './services/boot-resolver.service';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { LoadingBarService } from './services/loading-bar.service';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    PeopleListComponent,
    SinglePersonComponent,
    LoadingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule
  ],
  providers: [StarwarsApiService, BootResolver, LoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
