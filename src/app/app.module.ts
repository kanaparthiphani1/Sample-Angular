import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemServiceService } from './services/item-service.service';
import { AddItemsComponent } from './components/add-items/add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
