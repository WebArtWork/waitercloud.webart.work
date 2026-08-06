import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeViewComponent } from 'src/app/components/recipe/recipe-view/recipe-view.component';
import { RestaurantViewComponent } from 'src/app/components/restaurant/restaurant-view/restaurant-view.component';

export interface FeedItem {
	id: number;
	title: string;
	author: string;
	likes: string;
	comments: string;
	image: string;
	type?: string;
	ingredients?: string[];
}

@Component({
	selector: 'page-feed',
	templateUrl: './feed.component.html',
	imports: [
		MaterialComponent,
		RouterLink,
		RecipeViewComponent,
		RestaurantViewComponent,
	],
})
export class FeedComponent {
	readonly recipes = signal<FeedItem[]>([
		{
			id: 1,
			title: 'Справжня італійська паста Карбонара',
			author: 'Шеф Маріо',
			likes: '12.4K',
			comments: '342',
			image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop',
			// Додали інгредієнти
			ingredients: [
				'Спагетті',
				'Гуанчіале',
				'Пекоріно',
				'Яйця',
				'Чорний перець',
			],
		},
		{
			id: 2,
			title: 'Соковитий стейк Рібай з розмарином',
			author: "М'ясний Бро",
			likes: '8.9K',
			comments: '128',
			image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop',
			// Додали інгредієнти
			ingredients: [
				'Стейк Рібай',
				'Розмарин',
				'Часник',
				'Вершкове масло',
			],
		},
		{
			id: 3,
			title: 'Ніжний чизкейк Нью-Йорк',
			author: 'Солодка Анна',
			likes: '22.1K',
			comments: '956',
			image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop',
		},
	]);
}
