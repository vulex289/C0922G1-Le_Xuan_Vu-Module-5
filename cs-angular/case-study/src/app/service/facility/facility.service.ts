import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {FacilityTypeService} from './facility-type.service';
import {RentTypeService} from './rent-type.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_API = 'http://localhost:3000/facilities';

  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private http: HttpClient) {
  }


  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_API);
  }

  save(facilityCreate): Observable<Facility> {
    return this.http.post<Facility>(this.URL_API, facilityCreate);
  }

  findFacilityById(id): Observable<Facility> {
    return this.http.get<Facility>(this.URL_API + '/' + id);
  }

  editFacility(id, facilityEdit): Observable<Facility> {
    return this.http.patch<Facility>(this.URL_API + '/' + id, facilityEdit);
  }

  deleteFacility(id): Observable<Facility> {
    return this.http.delete<Facility>(this.URL_API + '/' + id);
  }
}
