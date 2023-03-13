import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../model/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  customers: Customer[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }
}
