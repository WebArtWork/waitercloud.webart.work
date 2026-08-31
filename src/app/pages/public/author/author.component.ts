import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../../components/recipe/recipe-short/recipe-short.component';
import { RestaurantShortComponent } from '../../../components/restaurant/restaurant-short/restaurant-short.component';

@Component({
	selector: 'page-author',
	standalone: true,
	imports: [
		MaterialComponent,
		RecipeShortComponent,
		RestaurantShortComponent,
	],
	templateUrl: './author.component.html',
	styleUrl: './author.component.scss',
})
export class AuthorComponent {
	readonly authorId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(
			map((params) => params.get('id')),
		),
		{ initialValue: null },
	);

	readonly author = signal({
		id: this.authorId() || '1',
		name: 'Шеф Маріо',
		role: 'Бренд-шеф / Експерт італійської кухні',
		bio: 'Італійський шеф-кухар, який ділиться традиційними рецептами, сучасними кулінарними техніками та багаторічним ресторанним досвідом.',
		imageUrl:
			'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
		experience: '12+ років досвіду',
		specialty: 'Автентична паста, морепродукти та випічка',
		recipes: [
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
		restaurants: [
			{
				id: 1,
				title: 'La Dolce Vita',
				description: 'Посада: Головний шеф-кухар (Head Chef)',
				imageUrl:
					'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
				rating: 4.8,
			},
		],
	});
}
