import {Injectable} from '@angular/core';
import {Contract} from '../../model/contract/contract';
import {CustomerService} from '../customer/customer.service';
import {FacilityService} from '../facility/facility.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private URL_API = 'http://localhost:3000/contracts';

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.URL_API);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(this.URL_API, contract);
  }

  searchByDate(dateStart, endDate): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.URL_API + '?startDate_gte=' + dateStart + '&endDate_lte=' + endDate);
  }
}
