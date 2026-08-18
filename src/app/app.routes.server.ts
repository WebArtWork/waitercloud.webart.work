import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'home',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'explore',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'map',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'recipe',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'restaurant',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'author',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'school',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'sign',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'workspace',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'editor',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'profile',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'settings',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'dashboard',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'admin/users',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'admin/clients',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'admin/forms',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'admin/form',
		renderMode: RenderMode.Prerender,
	},
	{
		path: '**',
		renderMode: RenderMode.Client,
	},
];
