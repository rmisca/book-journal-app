import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddBookPageComponent} from './pages/add-book-page/add-book-page.component';
import {ChallengePageComponent} from './pages/challenge-page/challenge-page.component';
import {HistoryBooksPageComponent} from './pages/history-books-page/history-books-page.component';
import {NotesPageComponent} from './pages/notes-page/notes-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './service/guard/auth.guard';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'add-book',
    component: AddBookPageComponent
  },
  {
    path: 'history-books',
    component: HistoryBooksPageComponent
  },
  {
    path: 'notes',
    component: NotesPageComponent
  },
  {
    path: 'challenge',
    component: ChallengePageComponent
  },
  {
    path: '',
    redirectTo: '/sign-in', pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'register-user',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent, canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
