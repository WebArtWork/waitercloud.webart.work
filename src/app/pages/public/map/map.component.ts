import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'page-map',
	templateUrl: './map.component.html',
	imports: [MaterialComponent],
})
export class MapComponent {
	// Фільтри для керування відображенням (згідно ТЗ)
	readonly filters = signal([
		{
			id: 'restaurants',
			label: 'Ресторани',
			icon: 'restaurant',
			active: true,
		},
		{ id: 'schools', label: 'Школи', icon: 'school', active: true },
		{ id: 'recipes', label: 'Рецепти', icon: 'menu_book', active: false },
		{ id: 'jobs', label: 'Вакансії', icon: 'work', active: false },
	]);

	// Статичні маркери для імітації об'єктів на карті
	readonly markers = signal([
		{
			id: 1,
			type: 'restaurants',
			label: 'Гастро Паб',
			top: '35%',
			left: '45%',
		},
		{
			id: 2,
			type: 'schools',
			label: 'Кулінарна школа',
			top: '60%',
			left: '25%',
		},
		{
			id: 3,
			type: 'restaurants',
			label: 'Піцерія',
			top: '20%',
			left: '70%',
		},
		{
			id: 4,
			type: 'recipes',
			label: 'Точка продажу меду',
			top: '75%',
			left: '80%',
		},
	]);

	// Метод для перемикання фільтрів (тільки візуал)
	toggleFilter(filterId: string) {
		this.filters.update((filters) =>
			filters.map((f) =>
				f.id === filterId ? { ...f, active: !f.active } : f,
			),
		);
	}
}
