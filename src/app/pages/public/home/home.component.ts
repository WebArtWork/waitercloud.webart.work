import { Component, signal } from '@angular/core';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [MaterialComponent], // Додали для іконки логотипу
})
export class HomeComponent {
	// Картинка для паралаксу (можеш замінити на будь-яку свою)
	readonly heroBg = signal(
		'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop',
	);
}
