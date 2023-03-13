import {Facility} from '../facility/facility';
import {Customer} from '../customer/customer';

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  facilityId?: Facility;
  customerId?: Customer;
}
