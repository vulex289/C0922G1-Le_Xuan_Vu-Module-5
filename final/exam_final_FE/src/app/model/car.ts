import {Location} from './location';
import {CarType} from './car-type';

export interface Car {
  id?: string;
  carType?: CarType;
  companyName?: string;
  departure?: Location;
  destination?: Location;
  phoneNumber?: string;
  email?: string;
  startHour?: string;
  endHour?: string;
}
