import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IChallenge} from '../components/add-challenge/add-challenge.component';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private firestore: AngularFirestore) { }

  createNewChallenge(data: IChallenge): Promise <any> {
    return this.firestore
      .collection('challenges')
      .add(data);
  }

  getChallenges(): Observable<any> {
    return this.firestore
      .collection('challenges')
      .valueChanges();
  }
}
