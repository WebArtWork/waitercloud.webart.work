import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'admin/form/:formId',
		renderMode: RenderMode.Client,
	},
	{
		path: 'sign',
		renderMode: RenderMode.Client,
	},
	{
		path: 'workspace',
		renderMode: RenderMode.Client,
	},
	{
		path: 'editor',
		renderMode: RenderMode.Client,
	},
	{
		path: 'profile',
		renderMode: RenderMode.Client,
	},
	{
		path: 'settings',
		renderMode: RenderMode.Client,
	},
	{
		path: 'dashboard/**',
		renderMode: RenderMode.Client,
	},
	{
		path: 'admin/**',
		renderMode: RenderMode.Client,
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
