import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface RecipeShortModel {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	status?: string;
}

@Component({
	selector: 'recipe-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './recipe-short.component.html',
	styleUrl: './recipe-short.component.scss',
})
export class RecipeShortComponent {
	/** Дані рецепта для відображення */
	readonly recipe = input.required<RecipeShortModel>();

	/** Подія кліку (опціонально, якщо потрібна зовнішня обробка) */
	readonly clickCard = output<number>();

	onCardClick(): void {
		this.clickCard.emit(this.recipe().id);
	}
}
