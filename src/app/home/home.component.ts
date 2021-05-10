import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {MenuItem, MessageService} from 'primeng/api';
import {IBook} from '../components/add-book/add-book.component';
import {ChallengeService} from '../service/challenge.service';
import {IChallenge} from '../components/add-challenge/add-challenge.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item: MenuItem[] = [];
  books: IBook[] = [];
  filterBooks: IBook[] = [];
  currentlyReading = 0;
  read = 0;
  wantToRead = 0;
  value = 0;
  countBooks = 0;

  constructor(private bookService: BookService,
              private challenge: ChallengeService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.item = [
      {label: 'Currently Reading', icon: 'pi pi-fw pi-pencil', id: 'currently_reading'},
      {label: 'Read', icon: 'pi pi-fw pi-calendar', id: 'read'},
      {label: 'Want to Read', icon: 'pi pi-fw pi-file', id: 'want_to_read'},
    ];

    this.showCurrentlyReadingBooks();
    this.showBookShelves();
  }

  showCurrentlyReadingBooks(): any{
    const statusValue: any = this.item[0].id;
    if (statusValue) {
      this.bookService.getBooksByStatus(statusValue).subscribe(filteredBooks => {
        this.filterBooks = filteredBooks;
      });
    }
  }

  showBookShelves(): void{
        this.bookService.getBooks().subscribe((data: IBook[]) => {
          this.books = data;
          this.currentlyReading = data.filter(value => value.bookStatus.realValue === 'currently_reading').length;
          this.read = data.filter(value => value.bookStatus.realValue === 'read').length;
          this.wantToRead = data.filter(value => value.bookStatus.realValue === 'want_to_read').length;
          this.countBooks = data.length;
          this.progressBar();
        });
  }

  // showReadingChallenges(){
  //   this.challenge.getChallenges().subscribe((data: IChallenge[] = []) => {
  //     this.challenges = data;
  //     console.log(data);
  //     this.yearChallenge = data.filter(value => +value.addTheYear === 2021);
  //     this.booksChallenge = data.filter(value => +value.howManyBooks === 23);
  //   });
  // }

  progressBar(){
    this.value = this.read / this.countBooks * 100;
  }
}

