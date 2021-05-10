import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BookService} from '../../service/book.service';
import {IBook} from '../add-book/add-book.component';
import {TabMenu} from 'primeng/tabmenu';


@Component({
  selector: 'app-history-books',
  templateUrl: './history-books.component.html',
  styleUrls: ['./history-books.component.scss']
})
export class HistoryBooksComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  books: IBook[] = [];

  filterBooks: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'All', icon: 'pi pi-fw pi-home', id: 'all'},
      {label: 'Read', icon: 'pi pi-fw pi-calendar', id: 'read'},
      {label: 'Currently Reading', icon: 'pi pi-fw pi-pencil', id: 'currently_reading'},
      {label: 'Want to Read', icon: 'pi pi-fw pi-file', id: 'want_to_read'},
    ];

    this.activeItem = this.items[0];
    this.showBooks();
  }

  showBooks(): void {
    this.bookService.getBooks()
      .subscribe((data: IBook[]) => {
        this.books = data;
        this.filterBooks = data;
      });
  }

  filterBook(status: TabMenu): void {
    const statusValue: string | undefined = status.activeItem.id;
    if (statusValue === 'all') {
      this.filterBooks = this.books;
    } else {
      this.bookService.getBooksByStatus(statusValue).subscribe(filteredBooks => {
        this.filterBooks = filteredBooks;
      });
    }
  }
}
