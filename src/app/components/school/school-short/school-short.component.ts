import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface SchoolShortModel {
	id: number | string;
	title: string;
	description: string;
	imageUrl: string;
	duration?: string;
}

@Component({
	selector: 'school-short',
	standalone: true,
	imports: [MaterialComponent, RouterLink],
	templateUrl: './school-short.component.html',
	styleUrl: './school-short.component.scss',
})
export class SchoolShortComponent {
	readonly school = input.required<SchoolShortModel>();
}
