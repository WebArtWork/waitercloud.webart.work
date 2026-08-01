import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'page-editor',
	templateUrl: './editor.component.html',
	imports: [MaterialComponent],
})
export class EditorComponent {
	// Доступні типи форм згідно з ТЗ
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

	// Поточний обраний тип форми
	readonly activeForm = signal('recipe');

	// Метод зміни форми
	selectForm(id: string) {
		this.activeForm.set(id);
	}
}
