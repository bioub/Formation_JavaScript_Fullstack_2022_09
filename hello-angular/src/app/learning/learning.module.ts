import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './learning.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserCreationComponent } from './user-creation/user-creation.component';



@NgModule({
  declarations: [
    LearningComponent,
    HelloComponent,
    CounterComponent,
    UserCreationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LearningComponent,
  ]
})
export class LearningModule { }
