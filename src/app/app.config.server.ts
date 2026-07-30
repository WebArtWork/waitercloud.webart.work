import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const provideServerStorage = (key: 'localStorage' | 'sessionStorage') => {
	const existing = globalThis[key];
	if (existing && typeof existing.getItem === 'function' && typeof existing.setItem === 'function') return;

	Object.defineProperty(globalThis, key, {
		value: {
			length: 0,
			clear: () => undefined,
			getItem: () => null,
			key: () => null,
			removeItem: () => undefined,
			setItem: () => undefined,
		},
	});
};

provideServerStorage('localStorage');
provideServerStorage('sessionStorage');

const serverConfig: ApplicationConfig = {
	providers: [provideServerRendering(withRoutes(serverRoutes))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
