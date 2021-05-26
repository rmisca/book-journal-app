import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: any = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {}
}
