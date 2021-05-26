import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';

export interface IBook {
  bookTitle: string;
  bookAuthor: string;
  bookNotes: string;
  bookStatus: any;
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
    bookNotes: new FormControl(''),
    bookStatus: new FormControl(''),
    startDate: new FormControl(''),
    finishDate: new FormControl(''),
  });
  ngOnInit(): void {

  }

  apiBooks() {
    this.bookService.getBook('Hercule')
      .subscribe(data => {
        console.log(data);
      });
  }
  addDataToFirestore(): void{
    const data: IBook = this.form.value;
    console.log(data);

    this.bookService.createNewBook(data)
      .then(res => {
      });
    // this.requiredData();
  }
  //
  // requiredData(): void {
  //   const dataValue: IBook = this.form.value;
  //   console.log(dataValue.bookTitle);
  //   // if (dataValue === '') {
  //   //   return
  //   // }
  // }

}
