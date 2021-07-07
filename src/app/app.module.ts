import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, StoreModule.forRoot({
    user: userReducer
  })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }