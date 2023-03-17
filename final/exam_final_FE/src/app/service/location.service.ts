import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private URL_API = 'http://localhost:8080/locations';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(this.URL_API);
  }
}
