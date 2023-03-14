import {Injectable} from '@angular/core';
import {FacilityType} from '../../model/facility/facility-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private URL_API = 'http://localhost:3000/facilityTypes';

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(this.URL_API);
  }
}
