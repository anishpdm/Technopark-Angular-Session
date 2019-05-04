import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ApiserviceService} from './apiservice.service';

import { TempComponent } from './temp/temp.component';
import { UserslistComponent } from './userslist/userslist.component';
import { NewuserlistsComponent } from './newuserlists/newuserlists.component';
import { HttpModule } from '@angular/http';






const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},

  {path:'temp',component:TempComponent},
  {path:'Users',component:NewuserlistsComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    TempComponent,
    NewuserlistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
    
  ],
  providers: [ApiserviceService],
  bootstrap: [NavbarComponent,MainComponent]
})
export class AppModule { }
