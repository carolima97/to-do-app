import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: ':status', component: TodoComponent },
    { path:  '**', redirectTo: '/all'}
];

/* parte mais importante dos metadados fica aqui */
@NgModule({
  /* onde vai todos os componentes */
  declarations: [
    AppComponent,
    TodoComponent
  ],
  /* routes e modules vem aqui */
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  /* lista os componentes que quer carregar quando o aplicativo é iniciado */
  bootstrap: [AppComponent]
})
export class AppModule { }

