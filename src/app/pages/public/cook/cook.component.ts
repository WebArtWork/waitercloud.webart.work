import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../../components/recipe/recipe-short/recipe-short.component';

interface RecipeWithIngredients {
	id: number;
	title: string;
	imageUrl: string;
	author: string;
	ingredients: string[]; // Список потрібних інгредієнтів у нижньому регістрі
}

@Component({
	selector: 'page-cook',
	standalone: true,
	imports: [FormsModule, MaterialComponent, RecipeShortComponent],
	templateUrl: './cook.component.html',
	styleUrl: './cook.component.scss',
})
export class CookComponent {
	// Введений користувачем текст у полі пошуку інгредієнта
	readonly ingredientInput = signal('');

	// Список доданих користувачем інгредієнтів
	readonly selectedIngredients = signal<string[]>(['яйця', 'сир', 'томати']);

	// Швидкі підказки популярних продуктів
	readonly popularIngredients = signal<string[]>([
		'курка',
		'паста',
		'молоко',
		'борошно',
		'цибуля',
		'часник',
		'картопля',
		'гриби',
		'бекон',
	]);

	// База рецептів для пошуку (мокові дані)
	readonly allRecipes = signal<RecipeWithIngredients[]>([
		{
			id: 1,
			title: 'Класичний омлет із сиром та томатами',
			imageUrl:
				'https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=600&auto=format&fit=crop',
			author: 'Шеф Маріо',
			ingredients: ['яйця', 'сир', 'томати', 'молоко'],
		},
		{
			id: 2,
			title: 'Карбонара з беконом',
			imageUrl:
				'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop',
			author: 'Шеф Маріо',
			ingredients: ['паста', 'яйця', 'сир', 'бекон', 'часник'],
		},
		{
			id: 3,
			title: 'Трюфельна паста з сиром',
			imageUrl:
				'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
			author: 'Шеф Маріо',
			ingredients: ['паста', 'гриби', 'сир', 'часник'],
		},
		{
			id: 4,
			title: 'Запечена курка з картоплею та томатами',
			imageUrl:
				'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600&auto=format&fit=crop',
			author: 'La Dolce Vita',
			ingredients: ['курка', 'картопля', 'томати', 'часник', 'цибуля'],
		},
	]);

	// Додати інгредієнт
	addIngredient(name: string) {
		const trimmed = name.trim().toLowerCase();
		if (trimmed && !this.selectedIngredients().includes(trimmed)) {
			this.selectedIngredients.update((prev) => [...prev, trimmed]);
			this.ingredientInput.set('');
		}
	}

	// Видалити інгредієнт
	removeIngredient(name: string) {
		this.selectedIngredients.update((prev) =>
			prev.filter((item) => item !== name),
		);
	}

	// Очистити все
	clearAll() {
		this.selectedIngredients.set([]);
	}

	// Розрахунок збігів і сортування страв від найбільш підходящих
	readonly matchedRecipes = computed(() => {
		const userItems = this.selectedIngredients();
		if (userItems.length === 0) return [];

		return this.allRecipes()
			.map((recipe) => {
				// Скільки інгредієнтів із рецепта є у користувача
				const matched = recipe.ingredients.filter((item) =>
					userItems.includes(item),
				);
				const matchPercentage = Math.round(
					(matched.length / recipe.ingredients.length) * 100,
				);
				const missingCount = recipe.ingredients.length - matched.length;

				return {
					...recipe,
					matchedCount: matched.length,
					matchPercentage,
					missingCount,
				};
			})
			.filter((recipe) => recipe.matchedCount > 0) // Показуємо, де є хоч 1 збіг
			.sort((a, b) => b.matchPercentage - a.matchPercentage); // Сортуємо за відсотком
	});
}
