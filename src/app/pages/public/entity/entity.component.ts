import { Component, inject, signal } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeViewComponent } from 'src/app/components/recipe/recipe-view/recipe-view.component';
import { RestaurantViewComponent } from 'src/app/components/restaurant/restaurant-view/restaurant-view.component';

@Component({
	selector: 'page-entity',
	templateUrl: './entity.component.html',
	styleUrls: ['./entity.component.scss'],
	imports: [
		MaterialComponent,
		LowerCasePipe,
		RouterLink,
		RecipeViewComponent,
		RestaurantViewComponent,
	],
})
export class EntityComponent {
	readonly entityId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(
			map((params) => params.get('id')),
		),
		{ initialValue: null },
	);
	// Статичні дані для демонстрації всіх вимог ТЗ
	readonly entity = signal({
		id: 1,
		type: 'Рецепт',
		title: 'Справжня італійська паста Карбонара',
		image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop',
		status: 'Активно',
		visibility: 'Публічний',
		rating: 4.9,
		reviewsCount: 128,
		author: {
			name: 'Шеф Маріо',
			avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop',
		},
		ownership: 'Ресторан "La Dolce Vita"',
		forkInfo: 'Оригінальний рецепт',
		description:
			'Класичний римський рецепт з гуанчіале, пекоріно романо, чорним перцем та яйцями. Жодних вершків! Ця страва ідеально підходить для швидкої та ситної вечері.',

		// === НОВІ ДАНІ ДЛЯ РЕЦЕПТУ ===
		ingredients: [
			'Спагетті - 400г',
			'Гуанчіале (або бекон) - 150г',
			'Яйця - 4 шт (тільки жовтки)',
			'Сир Пекоріно Романо - 100г',
			'Чорний перець - за смаком',
		],
		steps: [
			'Відваріть пасту в добре підсоленій воді до стану аль денте.',
			'Наріжте гуанчіале кубиками і обсмажте до хрусткої скоринки.',
			'Змішайте жовтки з тертим сиром і свіжомеленим перцем.',
			'Перекладіть гарячу пасту в сковороду (без вогню!). Додайте трохи води з-під пасти, влийте яєчну суміш і перемішайте.',
		],
	});

	// Відгуки та коментарі
	readonly comments = signal([
		{
			id: 1,
			user: 'Олена',
			text: 'Дуже смачно, дякую за детальну інструкцію!',
			time: '2 дні тому',
		},
		{
			id: 2,
			user: 'Максим',
			text: 'Спробував зробити вдома — вийшло як у найкращому ресторані.',
			time: '5 днів тому',
		},
	]);

	// Пов'язані сутності
	readonly related = signal([
		{
			id: 1,
			title: 'Паста Болоньєзе',
			image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=300&auto=format&fit=crop',
		},
		{
			id: 2,
			title: 'Лазанья',
			image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=300&auto=format&fit=crop',
		},
		{
			id: 3,
			title: 'Равіолі',
			image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=300&auto=format&fit=crop',
		},
	]);
}
