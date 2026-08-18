import {
	AfterViewInit,
	Component,
	ElementRef,
	inject,
	OnDestroy,
	PLATFORM_ID,
	signal,
	viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type * as Leaflet from 'leaflet';
import { MaterialComponent } from '@wawjs/ngx-ui';
@Component({
	selector: 'page-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	imports: [MaterialComponent],
})
export class MapComponent implements AfterViewInit, OnDestroy {
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly mapContainer =
		viewChild.required<ElementRef<HTMLElement>>('mapContainer');
	private map?: Leaflet.Map;

	// Фільтри для керування відображенням (згідно ТЗ)
	readonly filters = signal([
		{
			id: 'restaurants',
			label: 'Ресторани',
			icon: 'restaurant',
			active: true,
		},
		{ id: 'schools', label: 'Школи', icon: 'school', active: true },
		{ id: 'recipes', label: 'Рецепти', icon: 'menu_book', active: false },
		{ id: 'jobs', label: 'Вакансії', icon: 'work', active: false },
	]);

	// Статичні маркери для імітації об'єктів на карті
	readonly markers = signal([
		{
			id: 1,
			type: 'restaurants',
			label: 'Гастро Паб',
			top: '35%',
			left: '45%',
		},
		{
			id: 2,
			type: 'schools',
			label: 'Кулінарна школа',
			top: '60%',
			left: '25%',
		},
		{
			id: 3,
			type: 'restaurants',
			label: 'Піцерія',
			top: '20%',
			left: '70%',
		},
		{
			id: 4,
			type: 'recipes',
			label: 'Точка продажу меду',
			top: '75%',
			left: '80%',
		},
	]);

	async ngAfterViewInit(): Promise<void> {
		if (!this.isBrowser) return;

		const L = await import('leaflet');
		this.map = L.map(this.mapContainer().nativeElement).setView(
			[50.4501, 30.5234],
			12,
		);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors',
			maxZoom: 19,
		}).addTo(this.map);
	}

	ngOnDestroy(): void {
		this.map?.remove();
	}

	goToMyLocation(): void {
		this.map?.locate({ setView: true, maxZoom: 16 });
	}

	// Метод для перемикання фільтрів (тільки візуал)
	toggleFilter(filterId: string) {
		this.filters.update((filters) =>
			filters.map((f) =>
				f.id === filterId ? { ...f, active: !f.active } : f,
			),
		);
	}
}
