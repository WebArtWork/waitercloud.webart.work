import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface RestaurantViewModel {
	id: number | string;
	title: string;
	description: string;
	imageUrl: string;
	rating: number;
	address: string;
	workingHours: string;
}

@Component({
	selector: 'restaurant-view',
	standalone: true,
	imports: [MaterialComponent],
	templateUrl: './restaurant-view.component.html',
	styleUrl: './restaurant-view.component.scss',
})
export class RestaurantViewComponent {
	readonly restaurant = input.required<RestaurantViewModel>();
}
