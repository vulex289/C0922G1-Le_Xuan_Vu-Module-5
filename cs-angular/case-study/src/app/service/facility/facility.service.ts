import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {FacilityTypeService} from './facility-type.service';
import {RentTypeService} from './rent-type.service';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  facilities: Facility[] = [{
    id: 1,
    facilityName: 'Villa Beach Front',
    area: 250,
    cost: 1000000,
    maxPeople: 10,
    standardRoom: 'vip',
    descriptionOtherConvenience: 'Có hồ bơi',
    poolArea: 20,
    numberOfFloors: 2,
    rentType: this.rentTypeService.getAll()[0],
    facilityType: this.facilityTypeService.getAll()[0],
    url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
  },
    {
      id: 2,
      facilityName: 'House Princess 01',
      area: 100,
      cost: 3000000,
      maxPeople: 7,
      standardRoom: 'vip',
      descriptionOtherConvenience: ' Có thêm bếp nướng',
      numberOfFloors: 3,
      rentType: this.rentTypeService.getAll()[2],
      facilityType: this.facilityTypeService.getAll()[2],
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
    },
  ];

  getAll() {
    return this.facilities;
  }
}
