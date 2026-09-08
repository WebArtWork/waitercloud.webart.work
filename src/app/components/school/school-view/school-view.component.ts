import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeShortComponent } from '../../recipe/recipe-short/recipe-short.component';

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
	imports: [MaterialComponent, RecipeShortComponent, RouterLink],
	templateUrl: './school-view.component.html',
	styleUrl: './school-view.component.scss',
})
export class SchoolViewComponent {
	readonly school = input.required<SchoolViewModel>();
}
