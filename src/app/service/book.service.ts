import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IBook} from '../components/add-book/add-book.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  key = 'AIzaSyAW-uJRXmIdXFjslA5L5D-K4nNusvDUQwc';

  constructor(private firestore: AngularFirestore,
              private httpClient: HttpClient) { }

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

  getBook(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }
}


