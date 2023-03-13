import {Injectable} from '@angular/core';
import {RentType} from '../../model/facility/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor() {
  }

  rentTypes: RentType[] = [
    {
      id: 1,
      rentTypeName: 'year'
    },
    {
      id: 2,
      rentTypeName: 'month'
    },
    {
      id: 3,
      rentTypeName: 'day'
    },
    {
      id: 4,
      rentTypeName: 'hour'
    }
  ];

  getAll() {
    return this.rentTypes;
  }
}
