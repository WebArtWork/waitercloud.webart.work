import { Component, input } from '@angular/core';

export interface RestaurantMarkerModel {
	id: number | string;
	title: string;
	imageUrl: string;
}

@Component({
	selector: 'restaurant-icon',
	standalone: true,
	templateUrl: './restaurant-icon.component.html',
	styleUrl: './restaurant-icon.component.scss',
})
export class RestaurantIconComponent {
	readonly marker = input.required<RestaurantMarkerModel>();
}
