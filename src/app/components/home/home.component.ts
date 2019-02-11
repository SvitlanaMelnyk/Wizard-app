import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('p')
        .animate({color: '#AD3F37'}, 1500, 'linear')
        .delay(400)
        .animate({color: '#E35379'}, 1000, 'easeOutCirc');
  }
}
