import {Injectable} from '@angular/core';
import {FacilityType} from '../../model/facility/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor() {
  }

  facilityTypes: FacilityType[] = [
    {id: 1, facilityTypeName: 'villa'},
    {id: 2, facilityTypeName: 'house'},
    {id: 3, facilityTypeName: 'room'}
  ];

  getAll() {
    return this.facilityTypes;
  }
}
