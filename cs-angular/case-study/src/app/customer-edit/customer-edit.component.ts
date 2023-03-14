import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer/customer.service';
import {CustomerTypeService} from '../service/customer/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../model/customer/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormEdit: FormGroup;
  customerTypes: CustomerType[] = [];
  private id: string;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getDetailCustomerEdit(this.id);
    });

  }

  getDetailCustomerEdit(id) {
    this.customerService.findCustomerById(id).subscribe(item => {
      this.customerFormEdit = new FormGroup({
        id: new FormControl(item.id, [Validators.required, Validators.pattern('^KH[-][0-9]{4}$')]),
        name: new FormControl(item.name, [Validators.required]),
        dateOfBirth: new FormControl(item.dateOfBirth, Validators.required),
        gender: new FormControl(item.gender),
        idCard: new FormControl(item.idCard, [Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
        phoneNumber: new FormControl(item.phoneNumber, [Validators.required,
          Validators.pattern('^(([(]84[)][+]91)|([(]84[)][+]90)|090|091)[0-9]{7}$')]),
        email: new FormControl(item.email, Validators.email),
        address: new FormControl(item.address, Validators.required),
        customerType: new FormControl(this.customerTypes.find(i => i.id === item.customerType.id))
      });
    });
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  editCustomer() {
    this.customerService.editCustomer(this.id, this.customerFormEdit.value).subscribe(() => {
      this.router.navigateByUrl('customer/list');
    });
  }
}
