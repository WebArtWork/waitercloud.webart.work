import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RecipeFormComponent } from 'src/app/components/recipe/recipe-form/recipe-form.component';
import { RestaurantFormComponent } from 'src/app/components/restaurant/restaurant-form/restaurant-form.component';
import {
	SchoolFormComponent,
	SchoolFormData,
} from 'src/app/components/school/school-form/school-form.component';
import {
	EmployeeFormComponent,
	EmployeeFormData,
} from 'src/app/components/employee/employee-form/employee-form.component';

@Component({
	selector: 'page-editor',
	standalone: true,
	templateUrl: './editor.component.html',
	imports: [
		MaterialComponent,
		RecipeFormComponent,
		RestaurantFormComponent,
		SchoolFormComponent,
		EmployeeFormComponent,
	],
})
export class EditorComponent {
	readonly formTypes = signal([
		{ id: 'recipe', label: 'Рецепт', icon: 'menu_book' },
		{ id: 'restaurant', label: 'Ресторан', icon: 'restaurant' },
		{ id: 'school', label: 'Школа', icon: 'school' },
		{ id: 'employee', label: 'Працівник', icon: 'badge' },
		{ id: 'job', label: 'Вакансія', icon: 'work' },
		{ id: 'application', label: 'Заявка', icon: 'description' },
		{ id: 'proposal', label: 'Пропозиція', icon: 'lightbulb' },
		{ id: 'contract', label: 'Контракт', icon: 'gavel' },
	]);

	readonly activeForm = signal('recipe');

	selectForm(id: string) {
		this.activeForm.set(id);
	}

	onSaveSchool(schoolData: SchoolFormData) {
		console.log('School saved:', schoolData);
	}

	onSaveEmployee(employeeData: EmployeeFormData) {
		console.log('Employee saved:', employeeData);
	}
}
