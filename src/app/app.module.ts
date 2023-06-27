import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   //to use forms and ReactiveFormsModule to use r forms
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';    //to enable routing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';   //maincomponent
import { HeaderComponent } from './header/header.component';    //parent to child component
import { TesterComponent } from './tester/tester.component';    //child to parent component
import { FindService } from './find.service';                  //services
import { MainrouteComponent } from './mainroute/mainroute.component';    //routing
import { AboutComponent } from './about/about.component';        //routing
import { ContactComponent } from './contact/contact.component';   //routing
import { CoursesComponent } from './courses/courses.component';     //routing
import { NopagefoundComponent } from './nopagefound/nopagefound.component';    //routing
import { HomeComponent } from './home/home.component';            //routing
import { ProductsService } from './products.service';           //route-parameters
import { ProductlistComponent } from './productlist/productlist.component';      //route-parameters
import { ProductsComponent } from './products/products.component';       //route-parameters
import { HttpClientModule } from '@angular/common/http';                 //to get response from http server
import { HttpreqsComponent } from './httpreqs/httpreqs.component';         //http requests
import { NgcontentComponent } from './content/ngcontent.component';       //ng-content 
import { ContainerComponent } from './container/container.component';     //ng-container

const appRoute: Routes = [
  // {path : ' ' , component : MainrouteComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },    //Used to redirect the path to anither component
  { path: 'home', component: HomeComponent },            //Default component(Landing Page)
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },

  { path: 'products', component: ProductsComponent },           //Route-Paramaters
  { path: 'product/:id', component: ProductlistComponent },
  { path: '**', component: NopagefoundComponent },    //This should be always in last so that the We can access the valid URL's and neglect invalid

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TesterComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    NopagefoundComponent,
    MainrouteComponent,
    ProductlistComponent,
    ProductsComponent,
    HttpreqsComponent,
    NgcontentComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,      //Imported to use [(ngModel) and forms]
    RouterModule.forRoot(appRoute),   //Importing this to register "approute" in aplication
    AppRoutingModule,
    HttpClientModule,   //to handle http requests
    ReactiveFormsModule   //to handle reactive form module
  ],
  providers: [FindService, ProductsService],
  bootstrap: [AppComponent]  
})
export class AppModule { }