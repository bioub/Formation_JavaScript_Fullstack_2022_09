import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  names = ['Cristina', 'Romain', 'Baptiste', 'Pierre-Matthieu'];
  name = 'Romain'

  constructor() { }

  ngOnInit(): void {
  }

}
