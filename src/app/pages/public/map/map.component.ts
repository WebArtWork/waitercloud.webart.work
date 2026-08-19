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
	private leafletMarkers: Leaflet.Marker[] = [];
	private L: any;

	// Фільтри
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

	// Твої локації з реальними координатами (lat/lng)
	readonly markers = signal([
		{
			id: 1,
			type: 'restaurants',
			label: 'Гастро Паб',
			lat: 50.4501,
			lng: 30.5234,
		},
		{
			id: 2,
			type: 'schools',
			label: 'Кулінарна школа',
			lat: 50.46,
			lng: 30.51,
		},
		{
			id: 3,
			type: 'restaurants',
			label: 'Піцерія',
			lat: 50.44,
			lng: 30.53,
		},
		{
			id: 4,
			type: 'recipes',
			label: 'Точка продажу меду',
			lat: 50.43,
			lng: 30.5,
		},
	]);

	async ngAfterViewInit(): Promise<void> {
		if (!this.isBrowser) return;

		this.L = await import('leaflet');
		this.initMap();
		this.renderMarkers();
	}

	ngOnDestroy(): void {
		this.map?.remove();
	}

	private initMap(): void {
		this.map = this.L.map(this.mapContainer().nativeElement).setView(
			[50.4501, 30.5234],
			12,
		);

		this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors',
			maxZoom: 19,
		}).addTo(this.map);
	}

	// МЕТОД: Генерація твоїх кастомних маркерів з HTML/SCSS
	private getCustomIcon(markerData: any): any {
		// Дозволяємо брати картинку з даних маркера (якщо вона там є)
		let imageUrl = markerData.image || '';
		let iconName = 'school';

		// Якщо картинки немає, ставимо заглушки, АЛЕ зі стисненням (?w=150&q=80)
		if (markerData.type === 'restaurants' && !imageUrl) {
			imageUrl =
				'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&h=150&fit=crop&q=80';
		} else if (
			(markerData.type === 'recipes' || markerData.type === 'recipe') &&
			!imageUrl
		) {
			imageUrl =
				'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&q=80';
		} else if (markerData.type === 'jobs') {
			iconName = 'work';
		}

		let innerContent = '';
		if (imageUrl) {
			// Додав обробник onerror: якщо картинка раптом зламана, покажеться іконка ресторану/рецепту
			innerContent = `<img src="${imageUrl}"
                                 onerror="this.style.display='none'"
                                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block;" />`;
		} else {
			innerContent = `<span class="material-icons material-symbols-outlined" style="font-size: 16px; color: black;">${iconName}</span>`;
		}

		const html = `
            <div class="map__marker">
                <div class="map__marker-tooltip">${markerData.label}</div>
                <div class="map__marker-fallback">
                    ${innerContent}
                    <div class="map__marker-tail"></div>
                </div>
            </div>
        `;

		return this.L.divIcon({
			className: '',
			html: html,
			iconSize: [0, 0],
			iconAnchor: [0, 0],
		});
	}

	private renderMarkers(): void {
		if (!this.map || !this.L) return;

		// Очищаємо старі маркери
		this.leafletMarkers.forEach((marker) => marker.remove());
		this.leafletMarkers = [];

		const activeFilterIds = this.filters()
			.filter((f) => f.active)
			.map((f) => f.id);

		// Додаємо нові маркери з кастомним HTML
		this.markers().forEach((markerData) => {
			if (activeFilterIds.includes(markerData.type)) {
				const marker = this.L.marker([markerData.lat, markerData.lng], {
					icon: this.getCustomIcon(markerData),
				}).addTo(this.map!);

				this.leafletMarkers.push(marker);
			}
		});
	}

	goToMyLocation(): void {
		this.map?.locate({ setView: true, maxZoom: 16 });
	}

	toggleFilter(filterId: string) {
		this.filters.update((filters) =>
			filters.map((f) =>
				f.id === filterId ? { ...f, active: !f.active } : f,
			),
		);
		this.renderMarkers();
	}
}
