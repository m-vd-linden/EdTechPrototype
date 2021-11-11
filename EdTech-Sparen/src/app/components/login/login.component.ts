import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.email = null;
    this.password = null;
  }

  login(): void {
    console.log('test');
    this.router.navigate(['/']).then(_ => false);
  }

}
