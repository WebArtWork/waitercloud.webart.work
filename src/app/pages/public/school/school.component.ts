import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
	selector: 'page-school',
	templateUrl: './school.component.html',
})
export class SchoolComponent {
	readonly schoolId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);
}
