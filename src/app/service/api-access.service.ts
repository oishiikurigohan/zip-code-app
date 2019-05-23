import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResponseModel } from '../model/response.model';

@Injectable({ providedIn: 'root' })
export class ApiAccessService {

  constructor(private http: HttpClient) { }

  public getAddress(zipCode: string): Observable<ResponseModel>{

    return this.http.get<ResponseModel>('https://api.zipaddress.net/', { params: new HttpParams().set('zipcode', zipCode) })
      .pipe( 
        tap( response => { if(response.code != 200) throw new Error(response.message) } ),
        catchError( error => { throw new Error(error.message) } )
      );
  }
}
