import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionComponent } from './question/question.component';
import {HeaderComponent} from './header/header.component';
import { CardComponent } from './card/card.component';
import {HomeComponent} from './components/home/home.component';
import {MessagesComponent} from './components/messages/messages.component';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  {path: '',           component: RegisterComponent},
  {path: 'register',   component: RegisterComponent},
  {path: 'login',      component: LoginComponent},
  {path: 'question',   component: QuestionComponent},
  {path: 'header',     component:HeaderComponent},
  {path: 'header/card',     component:CardComponent},
  {path: 'header/home', component: HomeComponent},
  {path: 'header/messages', component: MessagesComponent},
  {path: 'header/settings' , component: SettingsComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
