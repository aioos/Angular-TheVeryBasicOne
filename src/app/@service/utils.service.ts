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

  getList<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/${url}`);
  }

  save<T>(url: string, data: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/${url}`, data, this.httpOptions);
  }

  del(url: string, id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${url}/${id}`);
  }
}
