import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private loginSubject: Subject<boolean>;
  public loginObserve: Observable<boolean>;

  constructor() {
    this.loginSubject = new Subject<boolean>();
    this.loginObserve = this.loginSubject.asObservable();
  }

  public sendLoginState(msg: boolean): boolean {
    this.loginSubject.next(msg);
    return msg;
  }
}
