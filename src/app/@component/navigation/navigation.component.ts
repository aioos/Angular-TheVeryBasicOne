import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../@service/event.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  login = false;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {
    this.eventService.loginObserve.subscribe(login => {
      this.login = login;
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      this.login = false;
    });
  }

}
