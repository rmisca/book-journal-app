import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  selectedState: any = null;

  states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
  ];

  constructor(private bookService: BookService) { }
  form = new FormGroup({
    bookTitle: new FormControl('test'),
    bookAuthor: new FormControl(''),
    bookReview: new FormControl(''),
  })
  ngOnInit(): void {
  }

  addDataToFirestore() {

  }
}
