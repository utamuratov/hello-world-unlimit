import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  /**
   *
   */
  isMatn = false;

  /**
   *
   */
  data = ['Hi', 'Angular', 'Hello', 'World'];

  /**
   *
   */
  digit = 2; // 1, 2, 3

  /**
   *
   */
  type: 'vue' | 'react' | 'angular' = 'vue';
  react = 'react';

  style() {
    return { color: this.type == 'vue' ? 'red' : 'blue' };
  }
}
