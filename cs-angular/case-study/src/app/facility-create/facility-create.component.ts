import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility/facility.service';
import {RentTypeService} from '../service/facility/rent-type.service';
import {FacilityTypeService} from '../service/facility/facility-type.service';
import {RentType} from '../model/facility/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../model/facility/facility-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  facilityFormCreate: FormGroup;

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getRentType();
    this.getFacilityType();
    this.facilityFormCreate = new FormGroup({
      id: new FormControl(''),
      facilityName: new FormControl('', [Validators.required, Validators.pattern('^[^0-9]+$')]),
      area: new FormControl('', [Validators.min(10), Validators.required]),
      cost: new FormControl('', [Validators.min(100000), Validators.required]),
      maxPeople: new FormControl('', [Validators.min(1), Validators.required]),
      rentType: new FormControl(this.rentTypes),
      facilityType: new FormControl(this.facilityTypes),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.min(0), Validators.required]),
      numberOfFloors: new FormControl('', [Validators.min(0), Validators.required]),
      facilityFree: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    });
  }

  getRentType() {
    this.rentTypeService.getAll().subscribe((item) => {
      this.rentTypes = item;
    });
  }

  getFacilityType() {
    this.facilityTypeService.getAll().subscribe((value) => {
      this.facilityTypes = value;
    });
  }

  saveFacility() {
    this.facilityService.save(this.facilityFormCreate.value).subscribe(() => {
      this.route.navigateByUrl('/facility/list');
    });
  }
}
