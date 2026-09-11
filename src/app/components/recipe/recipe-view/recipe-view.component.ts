import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { CommentsViewComponent } from '../../comment/comments-view/comments-view.component';
import { CommentShortModel } from '../../comment/comment-short/comment-short.component';
import { CommentSubmitPayload } from '../../comment/comment-form/comment-form.component';

export interface RecipeViewModel {
	id: number | string;
	title: string;
	description?: string;
	author: string;
	imageUrl: string;
	likes: number;
	comments: number;
}

@Component({
	selector: 'recipe-view',
	standalone: true,
	imports: [MaterialComponent, RouterLink, CommentsViewComponent],
	templateUrl: './recipe-view.component.html',
	styleUrl: './recipe-view.component.scss',
})
export class RecipeViewComponent {
	readonly recipe = input.required<RecipeViewModel>();

	/** Стан відкриття панелі коментарів */
	readonly showComments = signal(false);

	/** Список коментарів */
	readonly commentsList = signal<CommentShortModel[]>([
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

	toggleComments(): void {
		this.showComments.update((open) => !open);
	}

	onAddComment(payload: CommentSubmitPayload): void {
		const newComment: CommentShortModel = {
			id: Date.now(),
			authorName: 'Ви',
			text: payload.text,
			createdAt: 'Щойно',
			rating: payload.rating,
		};
		this.commentsList.update((prev) => [newComment, ...prev]);
	}
}
