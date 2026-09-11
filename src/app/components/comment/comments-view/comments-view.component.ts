import { Component, input, output } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';
import {
	CommentShortComponent,
	CommentShortModel,
} from '../comment-short/comment-short.component';
import {
	CommentFormComponent,
	CommentSubmitPayload,
} from '../comment-form/comment-form.component';

@Component({
	selector: 'comments-view',
	standalone: true,
	imports: [MaterialComponent, CommentShortComponent, CommentFormComponent],
	templateUrl: './comments-view.component.html',
	styleUrls: ['./comments-view.component.scss'],
})
export class CommentsViewComponent {
	readonly comments = input<CommentShortModel[]>([]);
	readonly title = input('Відгуки та коментарі');

	readonly addComment = output<CommentSubmitPayload>();

	onCommentSubmit(payload: CommentSubmitPayload) {
		this.addComment.emit(payload);
	}
}
