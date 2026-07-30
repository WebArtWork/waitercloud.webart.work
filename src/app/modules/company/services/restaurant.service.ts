import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Restaurant } from '../interfaces/restaurant.interface';

@Injectable({ providedIn: 'root' })
export class RestaurantService extends CrudService<Restaurant> {
	constructor() { super({ name: 'companydeliverrestaurant' }); }
}
