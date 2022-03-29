import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  pages = [
    {
      title: 'Visitantes',
      url: '/menu/first'
    },
      {
      title: 'Servicios',
      url: '/menu/third'
    },
    {
      title: 'PanelAdmin',
      url: '/menu/second'
    }
  ];
 
  constructor() { }
 
  ngOnInit() { }
 
}