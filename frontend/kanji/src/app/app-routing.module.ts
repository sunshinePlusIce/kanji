import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KanjiListComponent } from './components/kanji/kanji-list/kanji-list.component';
import { KanjiDetailComponent } from './components/kanji/kanji-detail/kanji-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: KanjiDetailComponent },
  { path: 'register', component: SignupComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'kanji', component: KanjiListComponent },
  { path: 'kanji/:kanji', component: KanjiDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
