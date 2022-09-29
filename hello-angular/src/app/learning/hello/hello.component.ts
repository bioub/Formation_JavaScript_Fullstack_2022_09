import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Toto';
    }, 3000)
  }

}
