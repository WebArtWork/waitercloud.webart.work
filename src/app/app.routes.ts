import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'feed',
		pathMatch: 'full',
	},
	{
		path: '',
		loadComponent: () =>
			import('./layouts/public/public.component').then(
				(m) => m.PublicComponent,
			),
		children: [
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Food feed' } },
				loadComponent: () =>
					import('./pages/public/feed/feed.component').then(
						(m) => m.FeedComponent,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Explore food' } },
				loadComponent: () =>
					import('./pages/public/explore/explore.component').then(
						(m) => m.ExploreComponent,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Food map' } },
				loadComponent: () =>
					import('./pages/public/map/map.component').then(
						(m) => m.MapComponent,
					),
			},
			{
				path: 'workspace',
				canActivate: [authenticatedGuard, MetaGuard],
				data: { meta: { title: 'Workspace' } },
				loadComponent: () =>
					import('./pages/public/workspace/workspace.component').then(
						(m) => m.WorkspaceComponent,
					),
			},
			{
				path: 'investment',
				canActivate: [MetaGuard],
				data: { meta: { title: 'For investors' } },
				loadComponent: () =>
					import('./pages/public/investment/investment.component').then(
						(m) => m.InvestmentComponent,
					),
			},
			{
				path: 'entity',
				canActivate: [MetaGuard],
				data: { meta: { title: 'Food directory' } },
				loadComponent: () =>
					import('./pages/public/entity/entity.component').then(
						(m) => m.EntityComponent,
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
				canActivate: [authenticatedGuard, MetaGuard],
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
				canActivate: [authenticatedGuard, MetaGuard],
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
		canActivate: [guestGuard],
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
		canActivate: [authenticatedGuard],
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
		canActivate: [adminsGuard],
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
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'feed',
		pathMatch: 'full',
	},
];
