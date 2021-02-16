import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BookService} from '../../service/book.service';
import {IBook} from '../../components/add-book/add-book.component';


@Component({
  selector: 'app-history-books',
  templateUrl: './history-books.component.html',
  styleUrls: ['./history-books.component.scss']
})
export class HistoryBooksComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  books: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.items = [
      {label: 'All', icon: 'pi pi-fw pi-home'},
      {label: 'Read', icon: 'pi pi-fw pi-calendar'},
      {label: 'Currently Reading', icon: 'pi pi-fw pi-pencil'},
      {label: 'Want to Read', icon: 'pi pi-fw pi-file'},
    ];

    this.activeItem = this.items[0];
    this.showBooks();
  }

  showBooks() {
  this.bookService.getBooks()
    .subscribe(data => {
      this.books = data;
    })
  }
}
