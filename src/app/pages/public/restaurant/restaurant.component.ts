import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { RestaurantViewComponent } from '../../../components/restaurant/restaurant-view/restaurant-view.component';

@Component({
	selector: 'page-restaurant',
	imports: [RestaurantViewComponent],
	templateUrl: './restaurant.component.html',
})
export class RestaurantComponent {
	readonly restaurantId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(
			map((params) => params.get('id')),
		),
		{ initialValue: null },
	);

	readonly restaurant = signal({
		id: '1',
		title: 'La Dolce Vita',
		description:
			'An Italian restaurant focused on traditional recipes and seasonal ingredients.',
		imageUrl:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
		rating: 4.8,
		address: 'Kyiv, Ukraine',
		workingHours: '10:00–22:00',
		menu: [
			{
				id: 1,
				title: 'Трюфельна паста',
				imageUrl:
					'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
				author: 'Шеф Маріо',
			},
			{
				id: 2,
				title: 'Піца Маргарита',
				imageUrl:
					'https://images.unsplash.com/photo-1513104890138-7c749659a591',
				author: 'Шеф Маріо',
			},
		],
		chefs: [
			{
				id: '1',
				name: 'Шеф Маріо',
				role: 'Head Chef',
				avatarUrl:
					'https://images.unsplash.com/photo-1577219491135-ce391730fb2c',
			},
		],
	});
}
