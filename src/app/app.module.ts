import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './components/home/home.component';
import {MessagesComponent} from './components/messages/messages.component';
import {SettingsComponent} from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponent,
    QuestionComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    MessagesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
