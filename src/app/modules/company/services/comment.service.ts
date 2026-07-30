import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Comment } from '../interfaces/comment.interface';

@Injectable({ providedIn: 'root' })
export class CommentService extends CrudService<Comment> {
	constructor() { super({ name: 'companydelivercomment' }); }
}
