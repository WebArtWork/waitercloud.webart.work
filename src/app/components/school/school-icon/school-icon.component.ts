import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface SchoolIconModel {
	id: number | string;
	title: string;
	imageUrl?: string;
}

@Component({
	selector: 'school-icon',
	standalone: true,
	imports: [MaterialComponent, RouterLink],
	templateUrl: './school-icon.component.html',
	styleUrl: './school-icon.component.scss',
})
export class SchoolIconComponent {
	readonly school = input.required<SchoolIconModel>();
}
