import { Component, signal } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'page-entity',
	templateUrl: './entity.component.html',
	imports: [MaterialComponent, LowerCasePipe],
})
export class EntityComponent {
	// Статичні дані для демонстрації всіх вимог ТЗ
	readonly entity = signal({
		type: 'Рецепт',
		title: 'Справжня італійська паста Карбонара',
		image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop',
		status: 'Активно', // status information
		visibility: 'Публічний', // visibility information
		rating: 4.9, // ratings
		reviewsCount: 128, // reviews
		author: {
			// author information
			name: 'Шеф Маріо',
			avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop',
		},
		ownership: 'Ресторан "La Dolce Vita"', // ownership information
		forkInfo: 'Оригінальний рецепт', // fork information
		description:
			'Класичний римський рецепт з гуанчіале, пекоріно романо, чорним перцем та яйцями. Жодних вершків! Ця страва ідеально підходить для швидкої та ситної вечері.',
	});

	// Відгуки та коментарі (comments, reviews)
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

	// Пов'язані сутності (related entities)
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
			image: 'https://images.unsplash.com/photo-1588013273468-315fd08af3c5?q=80&w=300&auto=format&fit=crop',
		},
	]);
}
