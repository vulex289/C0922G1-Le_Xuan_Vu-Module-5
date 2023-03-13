import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility/facility.service';
import {Facility} from '../model/facility/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
  return this.facilities = this.facilityService.getAll()
  }
}
