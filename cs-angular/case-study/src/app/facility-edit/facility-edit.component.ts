import {Component, OnInit} from '@angular/core';
import {RentType} from '../model/facility/rent-type';
import {FacilityType} from '../model/facility/facility-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../service/facility/facility.service';
import {RentTypeService} from '../service/facility/rent-type.service';
import {FacilityTypeService} from '../service/facility/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  facilityFormEdit: FormGroup;
  private id: number;

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getRentType();
    this.getFacilityType();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDetailEditFacility(this.id);
    });
  }

  getRentType() {
    this.rentTypeService.getAll().subscribe((item) => {
      this.rentTypes = item;
    });
  }

  getDetailEditFacility(id) {
    this.facilityService.findFacilityById(id).subscribe(item => {
      this.facilityFormEdit = new FormGroup({
        id: new FormControl(''),
        facilityName: new FormControl(item.facilityName, [Validators.required, Validators.pattern('^[^0-9]+$')]),
        area: new FormControl(item.area, [Validators.min(10), Validators.required]),
        cost: new FormControl(item.cost, [Validators.min(100000), Validators.required]),
        maxPeople: new FormControl(item.maxPeople, [Validators.min(1), Validators.required]),
        rentType: new FormControl(this.rentTypes.find(a => a.id === item.rentType.id)),
        facilityType: new FormControl(this.facilityTypes.find(b => b.id === item.facilityType.id)),
        standardRoom: new FormControl(item.standardRoom, Validators.required),
        descriptionOtherConvenience: new FormControl(item.descriptionOtherConvenience, Validators.required),
        poolArea: new FormControl(item.poolArea, [Validators.min(0), Validators.required]),
        numberOfFloors: new FormControl(item.numberOfFloors, [Validators.min(0), Validators.required]),
        facilityFree: new FormControl(item.facilityFree, Validators.required),
        url: new FormControl(item.url, Validators.required)
      });
    });
  }

  getFacilityType() {
    this.facilityTypeService.getAll().subscribe((value) => {
      this.facilityTypes = value;
    });
  }

  editFacility() {
    this.facilityService.editFacility(this.id, this.facilityFormEdit.value).subscribe(() => {
      this.route.navigateByUrl('facility/list');
    });
  }
}
