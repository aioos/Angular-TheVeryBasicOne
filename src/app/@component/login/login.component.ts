import { Component, OnInit } from '@angular/core';
import { Backstage } from '../../@interface/backstage';
import { Router } from '@angular/router';
import { UtilsService } from '../../@service/utils.service';
import { EventService } from '../../@service/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backstage: Backstage = {};

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.utilsService.login(this.backstage).subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);

        this.eventService.sendLoginState(true);

        return this.router.navigate(['dashboard']);
      }
    }, error => {
      this.eventService.sendLoginState(false);
    });
  }

}
