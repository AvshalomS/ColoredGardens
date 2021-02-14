import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private REST_API_SERVER='https://jsonplaceholder.typicode.com'
private REST_API_PHOTOS=`${this.REST_API_SERVER}/photos`
private REST_API_USERS=`${this.REST_API_SERVER}/users`

  constructor(private httpClient:HttpClient) { }

  handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    console.log('from catchError: ',errorMessage);
    
    return throwError(errorMessage);
  }

  public getPhotos(){
    return this.httpClient.get(this.REST_API_PHOTOS).pipe(retry(3), catchError(this.handleError))
  }
  public getUsers(){
    return this.httpClient.get(this.REST_API_USERS).pipe(retry(3), catchError(this.handleError))
  }
}
