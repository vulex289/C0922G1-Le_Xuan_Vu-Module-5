import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/customer/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() {
  }

  customerTypes: CustomerType[] = [{
    id: 1,
    name: 'Diamond',
  },
    {
      id: 2,
      name: 'Vip',
    }, {
      id: 1,
      name: 'Normal',
    }, {
      id: 1,
      name: 'Diamond',
    },
  ];

  getAll() {
    return this.customerTypes;
  }
}
