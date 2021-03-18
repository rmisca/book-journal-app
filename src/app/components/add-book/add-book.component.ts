import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';

export interface IBook {
  bookTitle: string;
  bookAuthor: string;
  bookReview: string;
  bookStatus: string;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  status: any[] = [
    {displayValue: 'Read', realValue: 'read'},
    {displayValue: 'Currently Reading', realValue: 'currently_reading'},
    {displayValue: 'Want to Read', realValue: 'want_to_read'},
  ];

  constructor(private bookService: BookService) { }
  form = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookReview: new FormControl(''),
    bookStatus: new FormControl(''),
    startDate: new FormControl(''),
    finishDate: new FormControl(''),
  });
  ngOnInit(): void {
  }

  addDataToFirestore(): void{
    const data: IBook = this.form.value;
    console.log(data);

    this.bookService.createNewBook(data)
      .then(res => {
      });
  }

}
