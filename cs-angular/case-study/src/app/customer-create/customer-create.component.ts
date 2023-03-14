import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer/customer.service';
import {CustomerTypeService} from '../service/customer/customer-type.service';
import {CustomerType} from '../model/customer/customer-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerFormCreate: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.customerFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH[-][0-9]{4}$')]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl(),
      idCard: new FormControl('', [Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(([(]84[)][+]91)|([(]84[)][+]90)|090|091)[0-9]{7}$')]),
      email: new FormControl('', Validators.email),
      address: new FormControl('', Validators.required),
      customerType: new FormControl(this.customerTypes)
    });
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.customerFormCreate.value).subscribe(() => {
      this.router.navigateByUrl('/customer/list');
    });
  }
}
