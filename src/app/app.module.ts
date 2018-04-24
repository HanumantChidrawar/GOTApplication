import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//To use ngModel importing the required files.
import { FormsModule } from '@angular/forms';

//importing location service for back button functionality.
import {  Location } from '@angular/common';

//router module used for setting up the application level routes.
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { HttpClientModule } from '@angular/common/http';
import { GotService } from './got.service';

//importing the fontawesome module
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';

//import statement for Go to Top button
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import for custom pipe
import { OrderByPipe } from './order-by.pipe'; 

//import files for filter pipe
import { FilterPipeModule } from 'ngx-filter-pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent,
    OrderByPipe//declaring pipe in imports array for accessing through out the application.
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    GoTopButtonModule,
    FormsModule,
    FilterPipeModule,

    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'all',component:AllComponent},
      {path:'houses',component:HousesComponent},
      {path:'house/:houseId',component:HouseComponent},
      {path:'characters',component:CharactersComponent},
      {path:'character/:characterId',component:CharacterComponent},
      {path:'books',component:BooksComponent},
      {path:'book/:bookId',component:BookComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [GotService,Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
