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
import { Router } from '@angular/router';
import type * as Leaflet from 'leaflet';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'page-map',
	standalone: true,
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	imports: [MaterialComponent],
})
export class MapComponent implements AfterViewInit, OnDestroy {
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly router = inject(Router);
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

	// Локації
	readonly markers = signal([
		{
			id: 1,
			type: 'restaurants',
			label: 'Гастро Паб',
			lat: 50.4501,
			lng: 30.5234,
			image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&h=150&fit=crop&q=70',
		},
		{
			id: 2,
			type: 'schools',
			label: 'Кулінарна школа',
			lat: 50.46,
			lng: 30.51,
			image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=150&h=150&fit=crop&q=70',
		},
		{
			id: 3,
			type: 'restaurants',
			label: 'Піцерія',
			lat: 50.44,
			lng: 30.53,
			image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop&q=70',
		},
		{
			id: 4,
			type: 'recipes',
			label: 'Точка продажу меду',
			lat: 50.43,
			lng: 30.5,
			image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&q=70',
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

	private getCustomIcon(markerData: any): any {
		const imageUrl = markerData.image || '';
		let iconName = 'location_on';

		if (markerData.type === 'schools') {
			iconName = 'school';
		} else if (markerData.type === 'restaurants') {
			iconName = 'restaurant';
		} else if (markerData.type === 'recipes') {
			iconName = 'menu_book';
		} else if (markerData.type === 'jobs') {
			iconName = 'work';
		}

		let innerContent = '';
		if (imageUrl) {
			innerContent = `<img src="${imageUrl}"
                                 alt="${markerData.label}"
                                 loading="lazy"
                                 onerror="this.style.display='none'"
                                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block;" />`;
		} else {
			innerContent = `<span class="material-icons material-symbols-outlined" style="font-size: 16px; color: black;">${iconName}</span>`;
		}

		const html = `
            <div class="map__marker" style="cursor: pointer;">
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

	private handleMarkerClick(markerData: any): void {
		if (markerData.type === 'schools') {
			this.router.navigate(['/school'], {
				queryParams: { id: markerData.id },
			});
		} else if (markerData.type === 'restaurants') {
			this.router.navigate(['/restaurant'], {
				queryParams: { id: markerData.id },
			});
		} else if (markerData.type === 'recipes') {
			this.router.navigate(['/recipe'], {
				queryParams: { id: markerData.id },
			});
		}
	}

	private renderMarkers(): void {
		if (!this.map || !this.L) return;

		this.leafletMarkers.forEach((marker) => marker.remove());
		this.leafletMarkers = [];

		const activeFilterIds = this.filters()
			.filter((f) => f.active)
			.map((f) => f.id);

		this.markers().forEach((markerData) => {
			if (activeFilterIds.includes(markerData.type)) {
				const marker = this.L.marker([markerData.lat, markerData.lng], {
					icon: this.getCustomIcon(markerData),
				}).addTo(this.map!);

				marker.on('click', () => this.handleMarkerClick(markerData));

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
