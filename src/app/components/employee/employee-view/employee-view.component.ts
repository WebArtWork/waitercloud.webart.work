import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import {
	RecipeShortComponent,
	RecipeShortModel,
} from '../../recipe/recipe-short/recipe-short.component';

export interface EmployeeViewModel {
	id: number | string;
	name: string;
	role: string;
	avatarUrl: string;
	bio: string;
	experience: string;
	restaurantName?: string;
	restaurantId?: number | string;
	recipes?: RecipeShortModel[];
}

@Component({
	selector: 'employee-view',
	standalone: true,
	imports: [MaterialComponent, RecipeShortComponent, RouterLink],
	templateUrl: './employee-view.component.html',
	styleUrls: ['./employee-view.component.scss'],
})
export class EmployeeViewComponent {
	readonly employee = input.required<EmployeeViewModel>();
}
