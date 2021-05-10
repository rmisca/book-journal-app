import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TabMenu} from 'primeng/tabmenu';
import {ChallengeService} from '../../service/challenge.service';
import {IChallenge} from '../add-challenge/add-challenge.component';


@Component({
  selector: 'app-create-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  challenges: IChallenge[] = [];

  constructor(private challenge: ChallengeService) { }


  ngOnInit(): void {
  this.items = [
    {
      label: 'Challenges',
      icon: 'pi pi-fw pi-file',
      id: '0'
    },
    {
      label: 'Year Challenge',
      icon: 'pi pi-fw pi-pencil',
      id: '1'
    },
  ];

  this.activeItem = this.items[0];
  this.showChallenges();
}

  setActiveItem(currentActiveItem: TabMenu) {
    this.activeItem = currentActiveItem.activeItem;
  }

  showChallenges(): void {
    this.challenge.getChallenges()
      .subscribe((data: IChallenge[]) => {
        this.challenges = data;
      });
  }



}
