import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../recipe/recipe-short/recipe-short.component';

export interface RestaurantMenuItem {
	id: number;
	title: string;
	imageUrl: string;
	author: string;
	status?: string;
}

export interface RestaurantChefItem {
	id: number | string;
	name: string;
	role: string;
	avatarUrl: string;
}

export interface RestaurantViewModel {
	id: number | string;
	title: string;
	description: string;
	imageUrl: string;
	rating: number;
	address: string;
	workingHours: string;
	menu?: RestaurantMenuItem[];
	chefs?: RestaurantChefItem[];
}

@Component({
	selector: 'restaurant-view',
	standalone: true,
	imports: [MaterialComponent, RecipeShortComponent, RouterLink],
	templateUrl: './restaurant-view.component.html',
	styleUrl: './restaurant-view.component.scss',
})
export class RestaurantViewComponent {
	readonly restaurant = input.required<RestaurantViewModel>();
}
