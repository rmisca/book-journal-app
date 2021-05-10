import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BjournalSidenavComponent } from './components/core/bjournal-sidenav/bjournal-sidenav.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BjournalToolbarComponent } from './components/core/bjournal-toolbar/bjournal-toolbar.component';
import { BjournalContentComponent } from './components/core/bjournal-content/bjournal-content.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule} from 'primeng/toolbar';
import { HistoryBooksComponent } from './components/history-books/history-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddBookPageComponent } from './pages/add-book-page/add-book-page.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {CalendarModule} from 'primeng/calendar';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ChallengePageComponent } from './pages/challenge-page/challenge-page.component';
import {A11yModule} from '@angular/cdk/a11y';
import {CheckboxModule} from 'primeng/checkbox';
import { HistoryBooksPageComponent } from './pages/history-books-page/history-books-page.component';
import { ReviewsPageComponent } from './pages/reviews-page/reviews-page.component';
import { AddChallengeComponent } from './components/add-challenge/add-challenge.component';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    BjournalSidenavComponent,
    BjournalToolbarComponent,
    BjournalContentComponent,
    HistoryBooksComponent,
    AddBookComponent,
    ReviewsComponent,
    AddBookPageComponent,
    ChallengeComponent,
    ChallengePageComponent,
    HistoryBooksPageComponent,
    ReviewsPageComponent,
    AddChallengeComponent,
    LoginComponent,
    HomeComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToolbarModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    TabMenuModule,
    CalendarModule,
    A11yModule,
    CheckboxModule,
    CardModule,
    PasswordModule,
    HttpClientModule,
    ProgressBarModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

