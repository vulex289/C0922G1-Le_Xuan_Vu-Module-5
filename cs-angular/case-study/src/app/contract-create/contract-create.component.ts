import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ContractService} from '../service/contract/contract.service';
import {CustomerService} from '../service/customer/customer.service';
import {FacilityService} from '../service/facility/facility.service';
import {Customer} from '../model/customer/customer';
import {Facility} from '../model/facility/facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreateForm: FormGroup;
  customers: Customer[] = [];
  facilities: Facility[] = [];

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getCustomerAll();
    this.getFacilityAll();
    this.contractCreateForm = new FormGroup({
      id: new FormControl(),
      startDate: new FormControl('', this.checkStartDate),
      endDate: new FormControl(''),
      deposit: new FormControl(),
      facility: new FormControl(this.facilities),
      customer: new FormControl(this.customers)
    }, this.checkEndDate);
  }

  getCustomerAll() {
    this.customerService.getAll().subscribe(customer => {
      this.customers = customer;
    });
  }

  getFacilityAll() {
    this.facilityService.getAll().subscribe(facility => {
      this.facilities = facility;
    });
  }

  saveContract() {
    this.contractService.saveContract(this.contractCreateForm.value).subscribe(() => {
      this.router.navigateByUrl('/contract');
    });
  }

  checkStartDate(control: AbstractControl): any {
    const formYear = new Date(control.value).getFullYear();
    const formMonth = new Date(control.value).getMonth() + 1;
    const formDate = new Date(control.value).getDay();
    if (formYear > new Date().getFullYear()) {
      return null;
    }
    if (formYear < new Date().getFullYear()) {
      return {invalidStartDate: true};
    }
    if (formMonth > new Date().getMonth() + 1) {
      return null;
    }
    if (formMonth < new Date().getMonth() + 1) {
      return {invalidStartDate: true};
    }
    if (formDate >= new Date().getDay()) {
      return null;
    } else {
      return {invalidStartDate: true};
    }
  }

  checkEndDate(control: FormGroup): any {
    const endYear = new Date(control.get('endDate').value).getFullYear();
    console.log('sss1' + endYear);
    const endMonth = new Date(control.get('endDate').value).getMonth() + 1;
    const endDate = new Date(control.get('endDate').value).getDay();
    const startYear = new Date(control.get('startDate').value).getFullYear();
    const startMonth = new Date(control.get('startDate').value).getMonth() + 1;
    const startDate = new Date(control.get('startDate').value).getDay();
    console.log(startYear);
    if (endYear < startYear) {
      return {invalidEndDate: true};
    }
    if (endYear > startYear) {
      return null;
    }
    if (endMonth < startMonth) {
      return {invalidEndDate: true};
    }
    if (endMonth > startMonth) {
      return null;
    }
    if (endDate >= startDate) {
      return null;
    } else {
      return {invalidStartDate: true};
    }
  }

}
