import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   //to use forms and ReactiveFormsModule to use r forms
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';    //to enable routing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   //maincomponent
import { HeaderComponent } from './header/header.component';    //parent to child component
import { TesterComponent } from './tester/tester.component';    //child to parent component
import { FindService } from './find.service';                  //services
import { ProductsService } from './products.service';           //route-parameters
import { HttpClientModule } from '@angular/common/http';                 //to get response from http server
import { HttpreqsComponent } from './httpreqs/httpreqs.component';         //http requests
import { NgcontentComponent } from './content/ngcontent.component';       //ng-content 
import { ContainerComponent } from './container/container.component';     //ng-container


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TesterComponent,
    HttpreqsComponent,
    NgcontentComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,      //Imported to use [(ngModel) and forms]
    AppRoutingModule,
    HttpClientModule,   //to handle http requests
    ReactiveFormsModule   //to handle reactive form module
  ],
  providers: [FindService, ProductsService],
  bootstrap: [AppComponent]  
})
export class AppModule { }