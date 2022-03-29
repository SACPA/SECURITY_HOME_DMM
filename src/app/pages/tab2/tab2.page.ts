import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  pages = [
    {
      title: 'Visitantes',
      url: '/menu/first'
    },
    {
      title: 'Visitas',
      url: '/menu/second'
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
