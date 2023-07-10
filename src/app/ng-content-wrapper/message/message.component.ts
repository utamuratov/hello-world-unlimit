import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  styleUrls: ['./message.component.css'],
  template: `<p>You will be logged in {{ days }} days</p>`,
})
export class MessageComponent {
  days = 30;
}
