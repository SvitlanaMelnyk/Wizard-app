import { Component } from '@angular/core';

@Component({
  selector: 'app-box-options',
  templateUrl: './box-options.component.html',
  styleUrls: ['./box-options.component.css']
})
export class BoxOptionsComponent {
  boxes = [
    {
      name: 'Be Better',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Be Smarter',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Be Faster',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Be Stronger',
      text: 'Lorem ipsum dolor sit amet.',
    }
  ];

  selectedBoxIndex: number;

  onBoxClick(index: number) {
    this.selectedBoxIndex = index;
  }
}
