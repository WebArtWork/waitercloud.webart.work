import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from 'src/app/components/recipe/recipe-short/recipe-short.component';
import { RestaurantShortComponent } from 'src/app/components/restaurant/restaurant-short/restaurant-short.component';
import { SchoolShortComponent } from 'src/app/components/school/school-short/school-short.component';

@Component({
	selector: 'page-explore',
	standalone: true,
	templateUrl: './explore.component.html',
	styleUrls: ['./explore.component.scss'],
	imports: [
		MaterialComponent,
		RouterLink,
		RecipeShortComponent,
		RestaurantShortComponent,
		SchoolShortComponent,
	],
})
export class ExploreComponent {
	readonly filters = signal([
		'Усі',
		'Рецепти',
		'Ресторани',
		'Кухарі',
		'Школи',
	]);
	readonly activeFilter = signal('Усі');
	readonly activeSubcategory = signal('');

	readonly exploreItems = signal([
		{
			id: 1,
			type: 'Рецепт',
			title: 'Піца Маргарита',
			subtitle: 'Шеф Луїджі',
			image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=70&w=500&auto=format&fit=crop',
		},
		{
			id: 2,
			type: 'Ресторан',
			title: 'Гастро Паб "М\'ясо"',
			subtitle: 'Київ, Україна',
			image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=70&w=500&auto=format&fit=crop',
			rating: 4.9,
		},
		{
			id: 3,
			type: 'Кухар',
			title: 'Анна Коваль',
			subtitle: 'Шеф-кухар, 5 років досвіду',
			image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=70&w=500&auto=format&fit=crop',
		},
		{
			id: 4,
			type: 'Рецепт',
			title: 'Сирники з ягодами',
			subtitle: 'Марія С.',
			image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=70&w=500&auto=format&fit=crop',
		},
		{
			id: 5,
			type: 'Школа',
			title: 'Кулінарна Академія',
			subtitle: 'Практичні курси для початківців та майбутніх шефів',
			image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=70&w=500&auto=format&fit=crop',
			duration: '3 місяці',
		},
		{
			id: 6,
			type: 'Рецепт',
			title: 'Томатний суп',
			subtitle: 'Веганські історії',
			image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=70&w=500&auto=format&fit=crop',
		},
	]);

	readonly filteredItems = computed(() => {
		const filter = this.activeFilter();
		const items = this.exploreItems();

		if (filter === 'Усі') return items;
		if (filter === 'Рецепти')
			return items.filter((i) => i.type === 'Рецепт');
		if (filter === 'Ресторани')
			return items.filter((i) => i.type === 'Ресторан');
		if (filter === 'Кухарі') return items.filter((i) => i.type === 'Кухар');
		if (filter === 'Школи') return items.filter((i) => i.type === 'Школа');

		return items;
	});

	readonly subcategories: Record<string, string[]> = {
		Рецепти: [
			'Сніданки',
			'Обіди',
			'Вечері',
			'Десерти',
			'Напої',
			'Веганські',
			"М'ясні",
		],
		Ресторани: ['Кафе', 'Піцерії', 'Паби', 'Суші', 'Фастфуд', "Кав'ярні"],
	};

	setFilter(filterName: string) {
		this.activeFilter.set(filterName);
		this.activeSubcategory.set('');
	}

	setSubcategory(sub: string) {
		this.activeSubcategory.set(sub);
	}
}
