import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from 'src/app/components/recipe/recipe-short/recipe-short.component';
import { RestaurantShortComponent } from 'src/app/components/restaurant/restaurant-short/restaurant-short.component';
@Component({
	selector: 'page-workspace',
	templateUrl: './workspace.component.html',
	imports: [
		MaterialComponent,
		RecipeShortComponent,
		RestaurantShortComponent,
	],
})
export class WorkspaceComponent {
	// Активна вкладка для перемикання розділів воркспейсу
	readonly activeTab = signal<
		'recipes' | 'restaurants' | 'jobs' | 'contracts'
	>('recipes');

	setActiveTab(tab: 'recipes' | 'restaurants' | 'jobs' | 'contracts') {
		this.activeTab.set(tab);
	}

	// Дані для приватного воркспейсу згідно з ТЗ
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
