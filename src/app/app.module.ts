import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   //to use forms and ReactiveFormsModule to use r forms
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   //maincomponent
import { HeaderComponent } from './header/header.component';    //parent to child component
import { TesterComponent } from './tester/tester.component';    //child to parent component
import { ProductsService } from './products.service';           //service for route-parameters
import { HttpClientModule } from '@angular/common/http';                 //to get response from http server
import { NgcontentComponent } from './ngcontent/ngcontent.component';       //ng-content 
import { ContainerComponent } from './container/container.component';      //ng-container
import { OnchangeComponent } from './LifeCycleHooks/onchange/onchange.component';
import { HomeComponent } from './LifeCycleHooks/home/home.component';
import { DocheckComponent } from './LifeCycleHooks/docheck/docheck.component';
import { AfterviewinitComponent } from './LifeCycleHooks/afterviewinit/afterviewinit.component';       // life-cycle-hooks


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TesterComponent,
    NgcontentComponent,
    ContainerComponent,
    HomeComponent,
    OnchangeComponent,
    DocheckComponent,
    AfterviewinitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,      //Imported to use [(ngModel) and forms]
    AppRoutingModule,
    HttpClientModule,   //to handle http requests
    ReactiveFormsModule   //to handle reactive form module
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }