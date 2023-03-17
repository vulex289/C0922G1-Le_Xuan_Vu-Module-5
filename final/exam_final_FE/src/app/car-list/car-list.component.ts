import {Component, OnInit} from '@angular/core';
import {CarService} from '../service/car.service';
import {Car} from '../model/car';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  idDelete = '';
  nameDelete = '';

  constructor(private carService: CarService) {
  }

  cars: Car[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe(item => {
      this.cars = item;
    });
  }

  getCarInFo(id: string, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteCar() {
    this.carService.deleteCar(this.idDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'DELETE INFORMATION ',
        text: 'You removed ' + this.nameDelete + ' successfully'
      });
      this.ngOnInit();
    });
  }
}
