import { Component, input, output } from '@angular/core';

@Component({
	selector: 'recipe-short',
	templateUrl: './recipe-short.component.html',
	styleUrl: './recipe-short.component.scss',
})
export class RecipeShortComponent {
	/** Дані рецепта для відображення */
	readonly recipe = input.required<{
		id: number;
		title: string;
		author: string;
		imageUrl: string;
		status?: string;
	}>();

	/** Подія кліку по картці */
	readonly clickCard = output<number>();

	/** Обробник кліку для переходу або відкриття деталей */
	onCardClick(): void {
		this.clickCard.emit(this.recipe().id);
	}
}
