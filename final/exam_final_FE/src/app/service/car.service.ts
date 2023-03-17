import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private URL_API = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.URL_API);
  }

  findById(id: string): Observable<Car> {
    return this.http.get<Car>(this.URL_API + '/detail/' + id);
  }

  deleteCar(id): Observable<Car> {
    return this.http.delete<Car>(this.URL_API + '/delete/' + id);
  }

  editCar(id: string, car): Observable<Car> {
    return this.http.patch<Car>(this.URL_API + '/edit/' + id, car);
  }
  saveCar( car: Car): Observable<Car> {
    return this.http.post<Car>(this.URL_API + '/save' , car);
  }
}
