import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningModule } from './learning/learning.module';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LearningModule,
    TodosModule,
    HttpClientModule,
    AppRoutingModule, // à laisser à la fin à cause la route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
