import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class BackstageInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(this.handleError<HttpEvent<unknown>>())
    );
  }

  private handleError<T>(): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error.status); // log to console instead

      if (401 === error.status) {
        this.router.navigate(['login']).catch();
        return of(null);
      }

      // Let the app keep running by returning an empty result.
      throw error;
    };
  }
}
