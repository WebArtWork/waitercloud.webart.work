import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanActivateFn } from '@angular/router';
import { environment } from '@env';

const origin = 'https://waitercloud.webart.work';

export const seoGuard: CanActivateFn = (route) => {
	const document = inject(DOCUMENT);
	const metaService = inject(Meta);
	const titleService = inject(Title);
	const page = route.data['meta'] as {
		title: string;
		description: string;
		path: string;
		image?: string;
	};
	const title = `${page.title} | ${environment.meta.title}`;
	const url = `${origin}${page.path}`;
	const image = page.image ?? environment.meta.image;

	titleService.setTitle(title);
	const tags: Array<[string, string, 'name' | 'property']> = [
		['description', page.description, 'name'],
		['robots', 'index, follow, max-image-preview:large', 'name'],
		['og:title', title, 'property'],
		['og:description', page.description, 'property'],
		['og:url', url, 'property'],
		['og:image', image, 'property'],
		['og:type', 'website', 'property'],
		['og:locale', 'en_US', 'property'],
		['og:site_name', environment.meta.title, 'property'],
		['twitter:card', 'summary_large_image', 'name'],
		['twitter:title', title, 'name'],
		['twitter:description', page.description, 'name'],
		['twitter:image', image, 'name'],
	];

	for (const [key, content, attribute] of tags) {
		metaService.updateTag({ [attribute]: key, content }, `${attribute}="${key}"`);
	}

	let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
	if (!canonical) {
		canonical = document.createElement('link');
		canonical.rel = 'canonical';
		document.head.appendChild(canonical);
	}
	canonical.href = url;

	return true;
};
