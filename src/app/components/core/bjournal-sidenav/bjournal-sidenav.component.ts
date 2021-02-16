import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bjournal-sidenav',
  templateUrl: './bjournal-sidenav.component.html',
  styleUrls: ['./bjournal-sidenav.component.scss']
})
export class BjournalSidenavComponent implements OnInit {
  visibleSidebar1 = true;

  constructor() { }

  ngOnInit(): void {

  }

}
