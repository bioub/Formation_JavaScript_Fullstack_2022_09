import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-hello-world',
  templateUrl: './ex-hello-world.component.html',
  styleUrls: ['./ex-hello-world.component.scss']
})
export class ExHelloWorldComponent implements OnInit {

  name = "Romain";

  constructor() { }

  ngOnInit(): void {
  }

}
