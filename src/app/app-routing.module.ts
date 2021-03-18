import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryBooksComponent} from './pages/history-books/history-books.component';
import {ReviewsComponent} from './pages/reviews/reviews.component';
import {AddBookPageComponent} from './pages/add-book-page/add-book-page.component';
import {CreateChallengePageComponent} from './pages/create-challenge-page/create-challenge-page.component';

const routes: Routes = [
  {
    path: 'add-book',
    component: AddBookPageComponent
  },
  {
    path: 'history-books',
    component: HistoryBooksComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'challenge',
    component: CreateChallengePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
