import { Component } from '@angular/core';

@Component({
  selector: 'app-header',

  // external template
  // templateUrl: './header.component.html',

  // inline template
  template: `
    <h2>Inline template example</h2>
    <p>Inline para tag</p>
  `,

  // external styles
  // styleUrls: ['./header.component.css']

  // inline styles
  styles: [
    `
      p {
        color: red;
      }
    `
  ]
})
export class HeaderComponent { }
