import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer/customer.service';
import {Customer} from '../model/customer/customer';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {CustomerTypeService} from '../service/customer/customer-type.service';
import {CustomerType} from '../model/customer/customer-type';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }


  idDelete: string;
  nameDelete: string;
  customers: Customer[] = [];
  nameSearch = '';
  email = '';
  customerTypeId = 0;
  customerTypes: CustomerType[] = [];

  ngOnInit(): void {
    // this.getAll();
    this.searchCustomer();
    this.getAllCustomerTypes();
  }

  // getAll() {
  //   this.customerService.getAll().subscribe((customer) => {
  //     this.customers = customer;
  //   });
  // }

  getAllBySearch() {
    this.customerService.getAllByItemSearch(this.nameSearch, this.email).subscribe(item => {
      this.customers = item;
    });
  }

  getInfoCustomerDelete(id: string, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.nameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  searchCustomer() {
    if (this.customerTypeId > 0) {
      this.customerService.getAllByItemSearchAndCustomerType(this.nameSearch, this.email, this.customerTypeId).subscribe(item => {
        this.customers = item;
      });
    } else {
      this.getAllBySearch();
    }

  }
}
