import {Injectable} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private URL_API = 'http://localhost:3000/rentTypes';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(this.URL_API);
  }
}
