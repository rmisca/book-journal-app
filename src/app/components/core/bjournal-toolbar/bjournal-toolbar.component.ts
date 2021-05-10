import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bjournal-toolbar',
  templateUrl: './bjournal-toolbar.component.html',
  styleUrls: ['./bjournal-toolbar.component.scss']
})
export class BjournalToolbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular Website',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }

  loginPage() {
    this.router.navigate(['/login']);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
