import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../model/car-type';

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {
  private URL_API = 'http://localhost:8080/carTypes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CarType[]> {
    return this.http.get<CarType[]>(this.URL_API);
  }
}
