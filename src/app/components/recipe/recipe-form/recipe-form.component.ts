import { Component, signal, output } from '@angular/core';
import { form, schema, required, submit } from '@angular/forms/signals';
import {
	ButtonComponent,
	InputComponent,
	MaterialComponent,
} from '@wawjs/ngx-ui';

export interface RecipeModel {
	title: string;
	description: string;
}

const recipeSchema = schema<RecipeModel>((path) => {
	required(path.title, { message: "Назва рецепта обов'язкова" });
	required(path.description, { message: 'Додайте опис рецепта' });
});

@Component({
	selector: 'recipe-form',
	templateUrl: './recipe-form.component.html',
	styleUrl: './recipe-form.component.scss',
	imports: [MaterialComponent, ButtonComponent, InputComponent],
})
export class RecipeFormComponent {
	/** Подія успішного збереження форми */
	readonly save = output<RecipeModel>();

	/** Стан процесу збереження */
	readonly isSubmitting = signal(false);

	/** Модель даних форми */
	readonly recipeModel = signal<RecipeModel>({
		title: '',
		description: '',
	});

	/** Дерево форми на основі сигналів */
	readonly recipeForm = form(this.recipeModel, recipeSchema);

	/** Обробник відправки форми */
	onSubmit(): void {
		submit(this.recipeForm, (formTree) => {
			this.isSubmitting.set(true);
			const payload = formTree().value() as RecipeModel;

			// Еміт даних наверх або виклик сервісу
			this.save.emit(payload);
			this.isSubmitting.set(false);

			return Promise.resolve({} as any);
		});
	}
}
