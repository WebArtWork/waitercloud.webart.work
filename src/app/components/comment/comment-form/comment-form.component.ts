import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface CommentSubmitPayload {
	text: string;
	rating: number;
}

@Component({
	selector: 'comment-form',
	standalone: true,
	imports: [FormsModule, MaterialComponent],
	templateUrl: './comment-form.component.html',
	styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
	readonly placeholder = input('Поділіться вашими враженнями...');
	readonly enableRating = input(true);

	readonly submitComment = output<CommentSubmitPayload>();

	readonly text = signal('');
	readonly rating = signal(5);
	readonly stars = [1, 2, 3, 4, 5];

	setRating(val: number) {
		this.rating.set(val);
	}

	onSubmit() {
		const commentText = this.text().trim();
		if (!commentText) return;

		this.submitComment.emit({
			text: commentText,
			rating: this.rating(),
		});

		this.text.set('');
		this.rating.set(5);
	}
}
