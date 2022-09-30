import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './learning.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ExHelloWorldComponent } from './ex-hello-world/ex-hello-world.component';
import { ExMultiStateButtonComponent } from './ex-multi-state-button/ex-multi-state-button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LearningComponent,
    HelloComponent,
    CounterComponent,
    UserCreationComponent,
    ExHelloWorldComponent,
    ExMultiStateButtonComponent,
    ButtonGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LearningComponent,
  ]
})
export class LearningModule { }
