import { Component, OnInit } from '@angular/core';
import {ChallengeService} from '../../service/challenge.service';
import {FormControl, FormGroup} from '@angular/forms';

export interface IChallenge {
  howManyBooks: number;
  addTheYear: number;
}

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.scss']
})
export class AddChallengeComponent implements OnInit {

  challenges: IChallenge[] = [];
  form = new FormGroup({
    howManyBooks: new FormControl(''),
    addTheYear: new FormControl(''),
  });

  constructor(private challenge: ChallengeService) { }

  ngOnInit(): void {

  }
  addChallengeToFirestore(): void {
    const data: IChallenge = this.form.value;
    console.log(data);

    this.challenge.createNewChallenge(data)
      .then(res => {
      });
  }
}
