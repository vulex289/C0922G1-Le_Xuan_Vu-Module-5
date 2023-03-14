import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer/customer.service';
import {Customer} from '../model/customer/customer';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  checkModal: boolean ;
  idDelete: string;
  nameDelete: string;
  customers: Customer[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe((customer) => {
      this.customers = customer;
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
      this.checkModal = true;
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }
}
