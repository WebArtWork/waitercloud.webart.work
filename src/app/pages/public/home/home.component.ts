import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MaterialComponent],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	// Створюємо сигнал з масивом карток для секції інвестицій
	opportunities = signal([
		{
			icon: 'trending_up',
			title: 'Швидке масштабування',
			description:
				'Можливість стрімкого зростання та виходу на нові міжнародні ринки.',
		},
		{
			icon: 'handshake',
			title: 'Стратегічне партнерство',
			description:
				'Взаємовигідна співпраця з ключовими гравцями в HoReCa.',
		},
		{
			icon: 'lightbulb',
			title: 'Інноваційні рішення',
			description:
				'Впровадження передових технологій автоматизації для закладів.',
		},
		{
			icon: 'payments',
			title: 'Прозора рентабельність',
			description:
				'Зрозуміла фінансова модель та швидке повернення інвестицій.',
		},
	]);
}
