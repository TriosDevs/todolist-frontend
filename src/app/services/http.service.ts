import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  baseURL: string = 'https://todolist-api.oguzhanercelik.dev/';
  constructor(private http: HttpClient, private authService: AuthService) {}

  createHttpRequest(endpoint: string, requestType: string, data: object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.authService.token}`,
    });

    const requestHeaders = { headers: headers };
    switch (requestType.toUpperCase()) {
      case 'POST':
        return this.http
          .post<any>(this.baseURL + endpoint, data, requestHeaders)
          .pipe(catchError(this.handleError));
      case 'GET':
        return this.http
          .get(this.baseURL + endpoint, requestHeaders)
          .pipe(catchError(this.handleError));
      case 'PUT':
        return this.http
          .put(this.baseURL + endpoint, data, requestHeaders)
          .pipe(catchError(this.handleError));

      case 'DELETE':
        return this.http
          .delete(this.baseURL + endpoint, requestHeaders)
          .pipe(catchError(this.handleError));
    }
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    return throwError(errorRes.error);
  }
}
