import { Component, inject, signal } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeViewComponent } from 'src/app/components/recipe/recipe-view/recipe-view.component';
import { RestaurantViewComponent } from 'src/app/components/restaurant/restaurant-view/restaurant-view.component';
import { CommentsViewComponent } from 'src/app/components/comment/comments-view/comments-view.component';
import { CommentShortModel } from 'src/app/components/comment/comment-short/comment-short.component';
import { CommentSubmitPayload } from 'src/app/components/comment/comment-form/comment-form.component';

@Component({
	selector: 'page-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss'],
	imports: [
		MaterialComponent,
		LowerCasePipe,
		RouterLink,
		RecipeViewComponent,
		RestaurantViewComponent,
		CommentsViewComponent,
	],
})
export class RecipeComponent {
	readonly entityId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(
			map((params) => params.get('id')),
		),
		{ initialValue: null },
	);

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
		ingredients: [
			'Спагетті - 400г',
			'Гуанчіале (або панчета) - 150г',
			'Жовтки - 4 шт.',
			'Сир Пекоріно Романо - 100г',
			'Свіжомелений чорний перець - за смаком',
		],
		steps: [
			'Відваріть пасту у великій кількості підсоленої води до стану аль денте (на 1 хвилину менше, ніж вказано на упаковці).',
			'Наріжте гуанчіале брусочками і обсмажте на сухій сковороді до золотистої та хрусткої скоринки. Зніміть з вогню.',
			'У мисці ретельно збийте жовтки з дрібно натертим сиром Пекоріно та великою кількістю чорного перцю.',
			'Перекладіть готову пасту в сковороду до гуанчіале. Додайте яєчно-сирну суміш та трохи води, в якій варилася паста. Інтенсивно перемішуйте до утворення густого кремового соусу.',
		],
	});

	readonly comments = signal<CommentShortModel[]>([
		{
			id: 1,
			authorName: 'Олена',
			text: 'Дуже смачно, дякую за детальну інструкцію!',
			createdAt: '2 дні тому',
			rating: 5,
		},
		{
			id: 2,
			authorName: 'Максим',
			text: 'Спробував зробити вдома — вийшло як у найкращому ресторані.',
			createdAt: '5 днів тому',
			rating: 5,
		},
	]);

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

	onAddComment(payload: CommentSubmitPayload): void {
		const newComment: CommentShortModel = {
			id: Date.now(),
			authorName: 'Ви',
			text: payload.text,
			createdAt: 'Щойно',
			rating: payload.rating,
		};
		this.comments.update((prev) => [newComment, ...prev]);
	}
}
