import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../recipe/recipe-short/recipe-short.component';
import { CommentsViewComponent } from '../../comment/comments-view/comments-view.component';
import { CommentShortModel } from '../../comment/comment-short/comment-short.component';
import { CommentSubmitPayload } from '../../comment/comment-form/comment-form.component';

export interface RestaurantMenuItem {
	id: number;
	title: string;
	imageUrl: string;
	author: string;
	status?: string;
}

export interface RestaurantChefItem {
	id: number | string;
	name: string;
	role: string;
	avatarUrl: string;
}

export interface RestaurantViewModel {
	id: number | string;
	title: string;
	description: string;
	imageUrl: string;
	rating: number;
	address: string;
	workingHours: string;
	menu?: RestaurantMenuItem[];
	chefs?: RestaurantChefItem[];
}

@Component({
	selector: 'restaurant-view',
	standalone: true,
	imports: [
		MaterialComponent,
		RecipeShortComponent,
		RouterLink,
		CommentsViewComponent,
	],
	templateUrl: './restaurant-view.component.html',
	styleUrl: './restaurant-view.component.scss',
})
export class RestaurantViewComponent {
	readonly restaurant = input.required<RestaurantViewModel>();

	readonly comments = signal<CommentShortModel[]>([
		{
			id: 1,
			authorName: 'Тарас Шевченко',
			text: 'Атмосфера неймовірна, паста власного виробництва просто тане в роті. Обовʼязково повернусь!',
			createdAt: 'Вчора',
			rating: 5,
			isVerifiedReviewer: false,
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
