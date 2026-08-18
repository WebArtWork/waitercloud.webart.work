import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { seoGuard } from './seo.guard';
import {
	prerenderAdminsGuard,
	prerenderAuthenticatedGuard,
	prerenderGuestGuard,
} from './prerender.guard';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/public/public.component').then(
				(m) => m.PublicComponent,
			),
		children: [
			{
				path: '',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Food Feed',
						description: 'Discover food inspiration, recipes, restaurants, and culinary creators on Waiter Cloud.',
						path: '/',
					},
				},
				loadComponent: () =>
					import('./pages/public/feed/feed.component').then(
						(m) => m.FeedComponent,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Explore Food',
						description: 'Explore recipes, restaurants, cooks, and cooking schools across the food industry.',
						path: '/explore',
					},
				},
				loadComponent: () =>
					import('./pages/public/explore/explore.component').then(
						(m) => m.ExploreComponent,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Food Map',
						description: 'Find restaurants, culinary schools, recipes, and food professionals on an interactive map.',
						path: '/map',
					},
				},
				loadComponent: () =>
					import('./pages/public/map/map.component').then(
						(m) => m.MapComponent,
					),
			},
			{
				path: 'workspace',
				canActivate: [prerenderAuthenticatedGuard, MetaGuard],
				data: { meta: { title: 'Workspace' } },
				loadComponent: () =>
					import('./pages/public/workspace/workspace.component').then(
						(m) => m.WorkspaceComponent,
					),
			},
			{
				path: 'home',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Food Discovery and Careers',
						description: 'Connect with recipes, restaurants, cooking schools, food professionals, jobs, and partnership opportunities.',
						path: '/home',
					},
				},
				loadComponent: () =>
					import('./pages/public/home/home.component').then(
						(m) => m.HomeComponent,
					),
			},
			{
				path: 'recipe',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Recipe',
						description: 'Discover recipe details, ingredients, creators, and related food inspiration on Waiter Cloud.',
						path: '/recipe',
					},
				},
				loadComponent: () =>
					import('./pages/public/recipe/recipe.component').then(
						(m) => m.RecipeComponent,
					),
			},
			{
				path: 'restaurant',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Restaurant',
						description: 'View restaurant details, location, opening hours, and related recommendations on Waiter Cloud.',
						path: '/restaurant',
					},
				},
				loadComponent: () =>
					import('./pages/public/restaurant/restaurant.component').then(
						(m) => m.RestaurantComponent,
					),
			},
			{
				path: 'author',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Food Professional',
						description: 'View food-professional profiles, published recipes, and related culinary work on Waiter Cloud.',
						path: '/author',
					},
				},
				loadComponent: () =>
					import('./pages/public/author/author.component').then(
						(m) => m.AuthorComponent,
					),
			},
			{
				path: 'school',
				canActivate: [MetaGuard, seoGuard],
				data: {
					meta: {
						title: 'Cooking School',
						description: 'View cooking-school programs, specialties, and contact details on Waiter Cloud.',
						path: '/school',
					},
				},
				loadComponent: () =>
					import('./pages/public/school/school.component').then(
						(m) => m.SchoolComponent,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Editor' } },
				loadComponent: () =>
					import('./pages/public/editor/editor.component').then(
						(m) => m.EditorComponent,
					),
			},
			{
				path: 'profile',
				canActivate: [prerenderAuthenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Profile',
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [prerenderAuthenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Settings',
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [prerenderGuestGuard],
		loadComponent: () =>
			import('./layouts/guest/guest.component').then(
				(m) => m.GuestComponent,
			),
		children: [
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [prerenderAuthenticatedGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'dashboard',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Панель',
					},
				},
				loadChildren: () =>
					import('./pages/user/dashboard/dashboard.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [prerenderAdminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadComponent: () =>
					import('./pages/admin/forms/admin-forms.component').then(
						(m) => m.AdminFormsComponent,
					),
			},
			{
				path: 'form',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadComponent: () =>
					import('./pages/admin/form/admin-form.component').then(
						(m) => m.AdminFormComponent,
					),
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];
