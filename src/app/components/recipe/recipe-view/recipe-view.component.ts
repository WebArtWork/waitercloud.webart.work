import { Component, input } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RouterModule } from '@angular/router'; // Додали для routerLink

@Component({
	selector: 'recipe-view',
	templateUrl: './recipe-view.component.html',
	styleUrl: './recipe-view.component.scss',
	imports: [MaterialComponent, RouterModule],
})
export class RecipeViewComponent {
	readonly recipe = input.required<{
		id: number;
		title: string;
		description?: string;
		author: string;
		imageUrl: string;
		likes: number;
		comments: number;
	}>();
}
