import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerType} from '../../model/customer/customer-type';
import {CustomerTypeService} from './customer-type.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private customerTypeService: CustomerTypeService,
              private http: HttpClient) {
  }

  private URL_API = ' http://localhost:3000/customers';

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL_API);
  }

  findCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.URL_API + '/' + id);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(this.URL_API + '/' + id);
  }

  editCustomer(id: string, customerEdit): Observable<Customer> {
    return this.http.patch(this.URL_API + '/' + id, customerEdit);
  }

  saveCustomer(customerCreate): Observable<Customer> {
    return this.http.post(this.URL_API, customerCreate);
  }
}
