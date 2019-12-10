import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionComponent } from './question/question.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  {path: '',           component: RegisterComponent},
  {path: 'register',   component: RegisterComponent},
  {path: 'login',      component: LoginComponent},
  {path: 'question',   component: QuestionComponent},
  {path: 'header',     component:HeaderComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
