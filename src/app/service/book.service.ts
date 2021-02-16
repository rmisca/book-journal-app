import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IBook} from '../components/add-book/add-book.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: AngularFirestore) { }

  createNewBook(data: IBook): Promise<any> {
    return this.firestore
      .collection('books')
      .add(data);
  }
  getBooks() {
    return this.firestore
      .collection('books')
      .valueChanges();
  }
}
