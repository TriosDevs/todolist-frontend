import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class HttpService {
    baseURL:string = 'https://todolist-api.oguzhanercelik.dev';
    constructor(private http:HttpClient){}

    createHttpRequest(endpoint:string,requestType:string,data:object){
        
        switch (requestType.toUpperCase()) {
            case 'POST':
                return this.http.post<any>(this.baseURL + endpoint,data).pipe(catchError(this.handleError))
            
            case 'GET':
                this.http.get(this.baseURL + endpoint).subscribe(res =>{
                    console.log(res);
                })
                break;
            case 'UPDATE':
                this.http.patch(this.baseURL + endpoint,data).subscribe(res =>{
                    console.log(res);
                })
                break;
            case 'DELETE':
                this.http.delete(this.baseURL + endpoint,data).subscribe(res =>{
                    console.log(res);
                })
                break;
        }

    }

    handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured!';
        console.log(errorRes);
        if (!errorRes.error){
            return throwError(errorMessage);
        }
        errorMessage=errorRes.error.message;
        return throwError(errorMessage);
    }
}