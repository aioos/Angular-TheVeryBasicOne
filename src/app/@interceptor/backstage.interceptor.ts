import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpEventType
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class BackstageInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(this.handleSuccess(request)),
      catchError(this.handleError<HttpEvent<unknown>>())
    );
  }

  private handleSuccess(request: HttpRequest<unknown>): (data) => void {
    return (data): void => {
      if (data.type === HttpEventType.Response) {
        this.matSnackBar.open('Success', '', {
          duration: 1000,
          horizontalPosition: 'left'
        });
      }
    };
  }

  private handleError<T>(): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.log(error.status); // log to console instead

      if (401 === error.status) {
        this.router.navigate(['login']).catch();
        localStorage.removeItem('token');
      }
      // console.log(error);
      this.matSnackBar.open(`${error.status} (${error.statusText}) : ${error.error.message}`, 'OK', {
        horizontalPosition: 'left'
      });
      // Let the app keep running by returning an empty result.
      return of(null);
    };
  }
}
