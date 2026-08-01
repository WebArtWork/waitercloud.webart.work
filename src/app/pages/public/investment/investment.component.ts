import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'page-investment',
	templateUrl: './investment.component.html',
	imports: [MaterialComponent],
})
export class InvestmentComponent {
	// Напрямки співпраці та інвестицій згідно з ТЗ
	readonly opportunities = signal([
		{
			title: 'Інвестиції',
			description:
				'Залучення капіталу для масштабування платформи та прискорення розвитку.',
			icon: 'trending_up',
		},
		{
			title: 'Стратегічне партнерство',
			description:
				'Пошук партнерів для інтеграції інноваційних рішень у харчовій індустрії.',
			icon: 'handshake',
		},
		{
			title: 'Продаж частки або платформи',
			description:
				'Розгляд пропозицій щодо продажу частини акцій або повного викупу проєкту.',
			icon: 'domain',
		},
		{
			title: 'Обговорення придбань',
			description:
				'Відкритість до діалогу щодо стратегічних бізнес-придбань та злиттів.',
			icon: 'business_center',
		},
		{
			title: 'Співпраця з організаціями',
			description:
				'Партнерство з профільними асоціаціями та організаціями харчової промисловості.',
			icon: 'groups',
		},
	]);
}
