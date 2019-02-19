import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { CarShow } from '../interfaces/car-show';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarShow[]> {    
    return this.http.get<CarShow[]>('/api/v1/cars/').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
