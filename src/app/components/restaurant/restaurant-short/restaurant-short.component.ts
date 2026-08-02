import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface RestaurantShortModel {
	id: number | string;
	title: string;
	description: string;
	imageUrl: string;
	rating: number;
}

@Component({
	selector: 'restaurant-short',
	standalone: true,
	imports: [MaterialComponent],
	templateUrl: './restaurant-short.component.html',
	styleUrl: './restaurant-short.component.scss',
})
export class RestaurantShortComponent {
	readonly restaurant = input.required<RestaurantShortModel>();
}
