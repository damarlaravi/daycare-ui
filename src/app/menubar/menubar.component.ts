import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  public items: MenuItem[] = [];
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'HOME',
        routerLink: '/home'
      },
      {
        label: 'EVENTS',
        routerLink: '/event'
      },
      {
        label: 'CONTACT US',
        routerLink: '/contact'
      },
    ];

    this.menuItems = [
      {
        label: 'Sign In',
        routerLink: '/auth/'
      },
      {
        label: 'Create Account',
        routerLink: '/auth/signup'
      },
      {
        separator: true
      },
      {
        label: 'Bookings'
      }, {
        label: 'My Account'
      }
    ]
  }
}
