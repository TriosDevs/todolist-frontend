import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  baseURL: string = 'https://todolist-api.oguzhanercelik.dev';
  constructor(private http: HttpClient,private authService: AuthService) {}

  createHttpRequest(endpoint: string, requestType: string, data: object) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.token}`
    });

  const requestOptions = { headers: headers };
    switch (requestType.toUpperCase()) {
      case 'POST':
        return this.http
          .post<any>(this.baseURL + endpoint, data)
          .pipe(catchError(this.handleError));

      case 'GET':
        
        return this.http.get(this.baseURL + endpoint,requestOptions).pipe(catchError(this.handleError));

      case 'UPDATE':
        this.http.patch(this.baseURL + endpoint, data).subscribe((res) => {
          console.log(res);
        });
        break;
      case 'DELETE':
        this.http.delete(this.baseURL + endpoint, data).subscribe((res) => {
          console.log(res);
        });
        break;
    }
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    errorMessage = errorRes.error.message;
    return throwError(errorMessage);
  }
}
