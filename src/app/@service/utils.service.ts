import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Backstage } from '../@interface/backstage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private url = environment.baseUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  public login(b: Backstage): Observable<string> {
    return this.httpClient.post<string>(`${this.url}/login`, b, this.httpOptions);
  }
}
