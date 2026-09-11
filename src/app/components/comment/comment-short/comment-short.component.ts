import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface CommentShortModel {
	id: number | string;
	authorName: string;
	authorAvatar?: string;
	text: string;
	createdAt: string;
	rating?: number; // 1-5
	isVerifiedReviewer?: boolean; // ТЗ: пріоритет та візуальне виділення для верифікованих критиків
	likesCount?: number;
}

@Component({
	selector: 'comment-short',
	standalone: true,
	imports: [MaterialComponent],
	templateUrl: './comment-short.component.html',
	styleUrls: ['./comment-short.component.scss'],
})
export class CommentShortComponent {
	readonly comment = input.required<CommentShortModel>();

	readonly stars = [1, 2, 3, 4, 5];
}
