import {
	Component,
	ElementRef,
	OnDestroy,
	signal,
	viewChildren,
	effect,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialComponent } from '@wawjs/ngx-ui';
import { RestaurantViewComponent } from 'src/app/components/restaurant/restaurant-view/restaurant-view.component';

export interface FeedItem {
	id: number;
	type: 'recipe' | 'restaurant' | 'author' | 'school';
	title: string;
	image: string;
	video?: string;
	author?: string;
	likes?: string;
	comments?: string;
	ingredients?: string[];
	description?: string;
	rating?: number;
	address?: string;
	workingHours?: string;
	specialty?: string;
}

@Component({
	selector: 'page-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
	imports: [MaterialComponent, RouterLink, RestaurantViewComponent],
})
export class FeedComponent implements OnDestroy {
	// Шукаємо всі відео на сторінці, щоб керувати ними
	videoElements = viewChildren<ElementRef<HTMLVideoElement>>('feedVideo');
	private observer?: IntersectionObserver;

	constructor() {
		// effect автоматично запускається, коли Angular знаходить відео на сторінці
		effect(() => {
			const videos = this.videoElements();

			// Якщо обсервер вже був, відключаємо його перед оновленням
			this.observer?.disconnect();

			if (videos.length === 0) return;

			// Створюємо "спостерігача" за скролом
			this.observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						const video = entry.target as HTMLVideoElement;

						// Якщо відео видно на екрані (isIntersecting) - граємо
						if (entry.isIntersecting) {
							video.play().catch(() => {
								// Ігноруємо помилки автоплею браузера
							});
						} else {
							// Якщо відео пішло за межі екрана - пауза
							video.pause();
						}
					});
				},
				{
					threshold: 0.6, // Відео увімкнеться, коли буде видно на 60%
				},
			);

			// Вішаємо спостерігача на кожне відео у стрічці
			videos.forEach((videoRef) => {
				this.observer?.observe(videoRef.nativeElement);
			});
		});
	}

	ngOnDestroy() {
		// Обов'язково чистимо за собою, коли користувач йде зі сторінки
		this.observer?.disconnect();
	}

	// Метод для ручної паузи/відтворення по кліку
	toggleVideo(video: HTMLVideoElement) {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	}
	toggleMute(video: HTMLVideoElement, event: Event) {
		event.stopPropagation(); // Зупиняємо подію, щоб відео не стало на паузу від цього кліку
		video.muted = !video.muted;
	}

	readonly feedItems = signal<FeedItem[]>([
		{
			id: 1,
			type: 'recipe',
			title: 'Справжня італійська паста Карбонара',
			author: 'Шеф Маріо',
			likes: '12.4K',
			comments: '342',
			image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop',
			video: 'https://www.w3schools.com/html/mov_bbb.mp4',
			ingredients: [
				'Спагетті',
				'Гуанчіале',
				'Пекоріно',
				'Яйця',
				'Чорний перець',
			],
		},
		{
			id: 2,
			type: 'restaurant',
			title: 'Стейкхаус "М\'ясний Бро"',
			image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop',
			description: 'Найкращі стейки сухої витримки у місті.',
			rating: 4.9,
			address: 'вул. Хрещатик, 15',
			workingHours: '12:00 - 23:00',
		},
		{
			id: 3,
			type: 'author',
			title: 'Солодка Анна',
			specialty: 'Шеф-кондитер | 150+ рецептів',
			author: 'Анна Коваль',
			likes: '45K',
			comments: '1.2K',
			image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
		},
		{
			id: 4,
			type: 'school',
			title: 'Кулінарна Академія Taste',
			specialty: 'Професійні курси для кухарів',
			author: 'Taste Academy',
			likes: '8.9K',
			comments: '230',
			image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop',
		},
	]);
}
