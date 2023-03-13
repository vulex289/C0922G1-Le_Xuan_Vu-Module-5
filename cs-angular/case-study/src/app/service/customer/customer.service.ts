import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerType} from '../../model/customer/customer-type';
import {CustomerTypeService} from './customer-type.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private customerTypeService: CustomerTypeService) {
  }

  customerTypes: CustomerType[] = this.customerTypeService.getAll();
  customers: Customer[] = [
    {
      id: 1,
      customerTypeId: this.customerTypes[0],
      name: 'Dương Văn Hào',
      dateOfBirth: '09-28-2000',
      gender: true,
      idCard: '201943464',
      phoneNumber: '0905703782',
      email: 'lexuanvu289@gmail.com',
      address: 'K02/12 Đinh Tiên Hoàng, Thanh Khê, Đà Nẵng'
    },
    {
      id: 2,
      customerTypeId: this.customerTypes[1],
      name: 'Nguyễn Văn Dương',
      dateOfBirth: '09-28-1994',
      gender: true,
      idCard: '201286494',
      phoneNumber: '0789123456',
      email: 'nguyent289@gmail.com',
      address: 'K14/15 Nguyễn Thị Thập, Thanh Khê, Đà Nẵng'
    }  ,{
      id: 3,
      customerTypeId: this.customerTypes[2],
      name: 'Nguyễn Thị Hà',
      dateOfBirth: '09-12-1998',
      gender: false,
      idCard: '2017564293',
      phoneNumber: '0789555872',
      email: 'nguyent289@gmail.com',
      address: 'K14/15 Nguyễn Thị Thập, Thanh Khê, Đà Nẵng'
    }
  ];

  getAll() {
    return this.customers;
  }
}
