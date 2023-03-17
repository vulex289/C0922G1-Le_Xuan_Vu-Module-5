import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../service/car.service';
import {LocationService} from '../service/location.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Location} from '../model/location';
import {CarType} from '../model/car-type';
import {CarTypeService} from '../service/car-type.service';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  carEditForm: FormGroup;
  locations: Location[] = [];
  carTypes: CarType[] = [];

  constructor(private carService: CarService,
              private locationService: LocationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private carTypeService: CarTypeService) {
  }

  id: string;

  ngOnInit(): void {
    this.getLocations();
    this.getCarType();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
    });
    this.getCarInFo(this.id);
  }

  getLocations() {
    this.locationService.getAll().subscribe(item => {
      this.locations = item;
    });
  }

  getCarType() {
    this.carTypeService.getAll().subscribe(item => {
      this.carTypes = item;
    });
  }

  getCarInFo(id) {
    this.carService.findById(id).subscribe(item => {
      this.carEditForm = new FormGroup({
        id: new FormControl(item.id, Validators.required),
        carType: new FormControl(this.carTypes.find(c => c.id === item.carType.id), [Validators.required]),
        companyName: new FormControl(item.companyName, [Validators.required]),
        departure: new FormControl(this.locations.find(a => a.name === item.departure.name), Validators.required),
        destination: new FormControl(this.locations.find(b => b.name === item.destination.name), Validators.required),
        phoneNumber: new FormControl(item.phoneNumber, [Validators.required,
          Validators.pattern('^((090)[0-9]{7}|(093)[0-9]{7}|(097)[0-9]{7})$')]),
        email: new FormControl(item.email, [Validators.required, Validators.email]),
        startHour: new FormControl(item.startHour, [Validators.required]),
        endHour: new FormControl(item.endHour, [Validators.required])
      });
    });
  }

  editCar() {
    this.carService.editCar(this.id, this.carEditForm.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
