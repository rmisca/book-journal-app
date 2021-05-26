import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
