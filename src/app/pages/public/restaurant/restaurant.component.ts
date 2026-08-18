import { Component, inject } from '@angular/core';
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
		inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);
}
