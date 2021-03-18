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
import { HistoryBooksComponent } from './pages/history-books/history-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
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
import { CreateChallengeComponent } from './components/create-challenge/create-challenge.component';
import { CreateChallengePageComponent } from './pages/create-challenge-page/create-challenge-page.component';
import {A11yModule} from '@angular/cdk/a11y';
import {CheckboxModule} from 'primeng/checkbox';

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
    CreateChallengeComponent,
    CreateChallengePageComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

