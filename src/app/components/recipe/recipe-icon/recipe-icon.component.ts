import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'recipe-icon',
	templateUrl: './recipe-icon.component.html',
	styleUrl: './recipe-icon.component.scss',
	imports: [MaterialComponent],
})
export class RecipeIconComponent {
	/** Короткі дані для маркера */
	readonly marker = input.required<{
		id: number;
		title: string;
		imageUrl: string;
	}>();
}
