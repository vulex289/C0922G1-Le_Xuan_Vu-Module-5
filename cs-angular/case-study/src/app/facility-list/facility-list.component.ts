import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility/facility.service';
import {Facility} from '../model/facility/facility';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  idFacility?: number;
  nameFacility?: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityService.getAll().subscribe(facility => {
      this.facilities = facility;
    });
  }

  getDetailDeleteFacility(id: number, facilityName: string) {
    this.idFacility = id;
    this.nameFacility = facilityName;
  }

  deleteFacility() {
    this.facilityService.deleteFacility(this.idFacility).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa Thành công!',
        text: 'Dịch Vụ' + this.nameFacility,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.ngOnInit();
    });
  }
}
