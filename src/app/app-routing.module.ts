import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookPageComponent} from './pages/add-book-page/add-book-page.component';
import {ChallengePageComponent} from './pages/challenge-page/challenge-page.component';
import {HistoryBooksPageComponent} from './pages/history-books-page/history-books-page.component';
import {ReviewsPageComponent} from './pages/reviews-page/reviews-page.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

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
    path: 'reviews',
    component: ReviewsPageComponent
  },
  {
    path: 'challenge',
    component: ChallengePageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
