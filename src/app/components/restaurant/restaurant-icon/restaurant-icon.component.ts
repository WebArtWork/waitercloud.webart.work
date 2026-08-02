import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface RestaurantMarkerModel {
	id: number | string;
	title: string;
	imageUrl: string;
}

@Component({
	selector: 'restaurant-icon',
	standalone: true,
	imports: [MaterialComponent],
	templateUrl: './restaurant-icon.component.html',
	styleUrl: './restaurant-icon.component.scss',
})
export class RestaurantIconComponent {
	readonly marker = input.required<RestaurantMarkerModel>();
}
