import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
	NavigationEnd,
	Router,
	RouterLink,
	RouterLinkActive,
	RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { MaterialComponent } from '@wawjs/ngx-ui';

@Component({
	selector: 'layout-public',
	templateUrl: './public.component.html',
	styleUrl: './public.component.scss',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, MaterialComponent],
})
export class PublicComponent {
	private readonly _router = inject(Router);
	private readonly _destroyRef = inject(DestroyRef);

	readonly pageTitle = signal(this._pageTitle(this._router.url));
	readonly isProfilePage = signal(this._router.url.includes('/profile'));
	constructor() {
		this._router.events
			.pipe(
				filter(
					(event): event is NavigationEnd =>
						event instanceof NavigationEnd,
				),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe((event) =>
				this.pageTitle.set(this._pageTitle(event.urlAfterRedirects)),
			);
	}

	private _pageTitle(url: string): string {
		const page = url.split('?')[0].split('/')[1];

		const pageTitles: Record<string, string> = {
			home: 'Home',
			feed: 'Feed',
			explore: 'Explore',
			map: 'Map',
			workspace: 'Workspace',
			investment: 'Investment',
			entity: 'Entity',
			editor: 'Editor',
			profile: 'Profile',
			settings: 'Settings',
		};

		return pageTitles[page] ?? 'Feed';
	}
}
