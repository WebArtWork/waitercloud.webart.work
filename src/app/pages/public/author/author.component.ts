import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
	selector: 'page-author',
	templateUrl: './author.component.html',
})
export class AuthorComponent {
	readonly authorId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);
}
