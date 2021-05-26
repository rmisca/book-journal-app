import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-bjournal-toolbar',
  templateUrl: './bjournal-toolbar.component.html',
  styleUrls: ['./bjournal-toolbar.component.scss']
})
export class BjournalToolbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        id: 'profile',
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/profile'
      },
        {
          id: 'sign-out',
          label: 'Sign out',
          icon: 'pi pi-sign-out',
          command: () => this.signOut()
        },
    ];
  }

  signInPage(): void {
    this.router.navigate(['/sign-in']);
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  signOut(): void {
    this.authService.SignOut();
  }

  getUserInitials() {
   return this.authService.userData.email[0];
  }
}
