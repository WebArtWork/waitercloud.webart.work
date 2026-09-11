import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../recipe/recipe-short/recipe-short.component';
import { CommentsViewComponent } from '../../comment/comments-view/comments-view.component';
import { CommentShortModel } from '../../comment/comment-short/comment-short.component';
import { CommentSubmitPayload } from '../../comment/comment-form/comment-form.component';

export interface SchoolRecipeItem {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	status?: string;
}

export interface SchoolInstructorItem {
	id: number | string;
	name: string;
	role: string;
	avatarUrl: string;
}

export interface SchoolViewModel {
	id: number | string;
	title: string;
	tagline?: string;
	description: string;
	imageUrl: string;
	address: string;
	duration: string;
	instructors?: SchoolInstructorItem[];
	recipes?: SchoolRecipeItem[];
}

@Component({
	selector: 'school-view',
	standalone: true,
	imports: [
		MaterialComponent,
		RecipeShortComponent,
		RouterLink,
		CommentsViewComponent,
	],
	templateUrl: './school-view.component.html',
	styleUrl: './school-view.component.scss',
})
export class SchoolViewComponent {
	readonly school = input.required<SchoolViewModel>();

	readonly comments = signal<CommentShortModel[]>([
		{
			id: 1,
			authorName: 'Олена Кравчук',
			text: 'Чудовий базовий курс з кондитерки! Шефи діляться реальною практикою.',
			createdAt: '2 дні тому',
			rating: 5,
			isVerifiedReviewer: true,
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
