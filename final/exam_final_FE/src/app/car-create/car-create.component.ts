import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarService} from '../service/car.service';
import {CarTypeService} from '../service/car-type.service';
import {LocationService} from '../service/location.service';
import {Router} from '@angular/router';
import {Car} from '../model/car';
import {CarType} from '../model/car-type';
import {Location} from '../model/location';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  carTypes: CarType[] = [];
  locations: Location[] = [];
  carCreateForm: FormGroup;

  constructor(private http: HttpClient,
              private carService: CarService,
              private carTypeService: CarTypeService,
              private locationService: LocationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCarType();
    this.getLocation();
    this.carCreateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      carType: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      departure: new FormControl(this.locations, Validators.required),
      destination: new FormControl(this.locations, Validators.required),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern('^((090)[0-9]{7}|(093)[0-9]{7}|(097)[0-9]{7})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      startHour: new FormControl('', [Validators.required]),
      endHour: new FormControl('', [Validators.required])
    });
  }

  getCarType() {
    this.carTypeService.getAll().subscribe(item => {
      this.carTypes = item;
    });
  }

  getLocation() {
    this.locationService.getAll().subscribe(item => {
      this.locations = item;
    });
  }

  createCar() {
    console.log(this.carCreateForm.value);
    this.carService.saveCar(this.carCreateForm.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
