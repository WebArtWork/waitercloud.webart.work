import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Додаємо імпорт
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from 'src/app/components/recipe/recipe-short/recipe-short.component';
import { RestaurantShortComponent } from 'src/app/components/restaurant/restaurant-short/restaurant-short.component';

@Component({
	selector: 'page-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	imports: [
		MaterialComponent,
		RecipeShortComponent,
		RestaurantShortComponent,
		RouterLink, // 2. Додаємо в imports
	],
})
export class WorkspaceComponent {
	// Активна вкладка
	readonly activeTab = signal<
		'recipes' | 'restaurants' | 'jobs' | 'contracts'
	>('recipes');

	setActiveTab(tab: 'recipes' | 'restaurants' | 'jobs' | 'contracts') {
		this.activeTab.set(tab);
	}

	// 3. РОЗУМНІ ВЛАСТИВОСТІ ДЛЯ КНОПКИ
	// Динамічний текст кнопки
	readonly createBtnLabel = computed(() => {
		switch (this.activeTab()) {
			case 'recipes':
				return 'Створити рецепт';
			case 'restaurants':
				return 'Створити заклад';
			case 'jobs':
				return 'Створити вакансію';
			case 'contracts':
				return 'Створити контракт';
			default:
				return 'Створити сутність';
		}
	});

	// Динамічне посилання для кнопки (роути)
	readonly createBtnLink = computed(() => {
		switch (this.activeTab()) {
			case 'recipes':
				return '/editor'; // Або '/editor?type=recipe'
			case 'restaurants':
				return '/editor';
			case 'jobs':
				return '/editor';
			case 'contracts':
				return '/editor';
			default:
				return '/editor';
		}
	});

	// --- Твої існуючі дані ---
	readonly ownedRecipes = signal([
		{ id: 1, title: 'Фірмовий стейк Рібай', status: 'Опубліковано' },
		{
			id: 2,
			title: 'Авторський соус Тартар',
			status: 'Чернетка (Приватний)',
		},
	]);

	readonly sharedRecipes = signal([
		{
			id: 3,
			title: 'Трюфельна паста від шефа Маріо',
			sharedBy: 'Шеф Маріо',
		},
	]);

	readonly favoriteEntities = signal([
		{ id: 4, title: 'Крафтова пекарня "Хліб та Дім"' },
	]);

	readonly managedRestaurants = signal([
		{ id: 1, name: 'Ресторан "La Dolce Vita"', role: 'Власник / Керуючий' },
	]);

	readonly professionalActivity = signal({
		employeeProfile: 'Активний (Frontend Developer)',
		jobsCount: 2,
		applicationsCount: 3,
		proposalsCount: 1,
		contractsCount: 2,
	});
}
