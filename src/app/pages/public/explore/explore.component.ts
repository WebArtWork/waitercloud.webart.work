import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from 'src/app/components/recipe/recipe-short/recipe-short.component';
import { RestaurantShortComponent } from 'src/app/components/restaurant/restaurant-short/restaurant-short.component';
@Component({
	selector: 'page-explore',
	templateUrl: './explore.component.html',
	imports: [
		MaterialComponent,
		RouterLink,
		RecipeShortComponent,
		RestaurantShortComponent,
	],
})
export class ExploreComponent {
	// Категорії для фільтрації (статика)
	readonly filters = signal([
		'Усі',
		'Рецепти',
		'Ресторани',
		'Кухарі',
		'Школи',
	]);
	readonly activeFilter = signal('Усі');

	// Мікс різних карток (short components)
	readonly exploreItems = signal([
		{
			id: 1,
			type: 'Рецепт',
			title: 'Піца Маргарита',
			subtitle: 'Шеф Луїджі',
			image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop',
		},
		{
			id: 2,
			type: 'Ресторан',
			title: 'Гастро Паб "М\'ясо"',
			subtitle: 'Київ, Україна',
			image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop',
		},
		{
			id: 3,
			type: 'Кухар',
			title: 'Анна Коваль',
			subtitle: 'Шеф-кухар, 5 років досвіду',
			image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=500&auto=format&fit=crop',
		},
		{
			id: 4,
			type: 'Рецепт',
			title: 'Сирники з ягодами',
			subtitle: 'Марія С.',
			image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=500&auto=format&fit=crop',
		},
		{
			id: 5,
			type: 'Школа',
			title: 'Кулінарна Академія',
			subtitle: 'Курси для новачків',
			image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=500&auto=format&fit=crop',
		},
		{
			id: 6,
			type: 'Рецепт',
			title: 'Томатний суп',
			subtitle: 'Веганські історії',
			image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500&auto=format&fit=crop',
		},
	]);

	setFilter(filterName: string) {
		this.activeFilter.set(filterName);
	}
}
