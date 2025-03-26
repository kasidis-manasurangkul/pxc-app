import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { LibraryComponent } from './pages/library/library.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RecommendationComponent,
    LibraryComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      RouterModule,
      CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
