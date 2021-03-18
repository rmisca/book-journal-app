import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IBook} from '../components/add-book/add-book.component';
import {Observable} from 'rxjs';

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
  getBooks(): Observable<any> {
    return this.firestore
      .collection('books')
      .valueChanges();
  }

  getBooksByStatus(status: string | undefined): Observable<any> {
    return this.firestore.collection('books',
        ref => ref.where('bookStatus.realValue', '==', status))
      .valueChanges();

  }
}


