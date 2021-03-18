import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormControl, FormGroup} from '@angular/forms';
import {TabMenu} from 'primeng/tabmenu';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem = {};


  constructor() { }
  form = new FormGroup({
    bookTitle: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookStatus: new FormControl(''),
  });
  ngOnInit(): void {
  this.items = [
    {
      label: 'Challenges',
      icon: 'pi pi-fw pi-file',
      id: 0
    },
    {
      label: 'Year Challenge',
      icon: 'pi pi-fw pi-pencil',
      id: 1
    },
  ];

  this.activeItem = this.items[0];
}

  setActiveItem(currentActiveItem: TabMenu) {
    this.activeItem = currentActiveItem.activeItem;

  }
}
