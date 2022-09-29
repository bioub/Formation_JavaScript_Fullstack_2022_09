import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  user = {
    username: 'romain',
    isActive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(event: SubmitEvent) {
    event.preventDefault();
  }
}
