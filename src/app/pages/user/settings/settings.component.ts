import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { form, submit } from '@angular/forms/signals';
import {
	ButtonComponent,
	InputComponent,
	MaterialComponent,
	ThemeComponent,
} from '@wawjs/ngx-ui';
import { UserService } from '@wawjs/ngx-bos';
import {
	LanguageService,
	TranslateDirective,
	TranslateService,
} from '@wawjs/ngx-translate';
import { SecurityModel } from './settings.interface';
import { securitySchema } from './settings.schema';

export interface FilterEntityItem {
	id: string;
	label: string;
	icon: string;
	active: boolean;
}

export interface InterestItem {
	id: string;
	label: string;
	selected: boolean;
}

@Component({
	selector: 'page-settings',
	standalone: true,
	imports: [
		InputComponent,
		ButtonComponent,
		ThemeComponent,
		MaterialComponent,
		TranslateDirective,
	],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
})
export class SettingsComponent {
	readonly userService = inject(UserService);
	readonly languageService = inject(LanguageService);
	readonly translateService = inject(TranslateService);
	private readonly _destroyRef = inject(DestroyRef);

	// === КРАЇНА (ТЗ: Вибір країни для персоналізації стрічки та пошуку) ===
	readonly countries = signal([
		{ code: 'UA', name: 'Україна', flag: '🇺🇦' },
		{ code: 'PL', name: 'Польща', flag: '🇵🇱' },
		{ code: 'IT', name: 'Італія', flag: '🇮🇹' },
		{ code: 'FR', name: 'Франція', flag: '🇫🇷' },
		{ code: 'US', name: 'США', flag: '🇺🇸' },
	]);
	readonly selectedCountry = signal('UA');

	setCountry(code: string): void {
		this.selectedCountry.set(code);
	}

	// === ВИДИМІ СУТНОСТІ (ТЗ: Visible entity types) ===
	readonly visibleEntities = signal<FilterEntityItem[]>([
		{ id: 'recipe', label: 'Рецепти', icon: 'menu_book', active: true },
		{
			id: 'restaurant',
			label: 'Ресторани',
			icon: 'restaurant',
			active: true,
		},
		{
			id: 'school',
			label: 'Кулінарні школи',
			icon: 'school',
			active: true,
		},
		{ id: 'employee', label: 'Шефи / Кухарі', icon: 'badge', active: true },
		{ id: 'job', label: 'Вакансії', icon: 'work', active: true },
	]);

	toggleEntity(id: string): void {
		this.visibleEntities.update((items) =>
			items.map((item) =>
				item.id === id ? { ...item, active: !item.active } : item,
			),
		);
	}

	// === КУЛІНАРНІ ІНТЕРЕСИ (ТЗ: Food interests) ===
	readonly interests = signal<InterestItem[]>([
		{ id: 'italian', label: 'Італійська кухня', selected: true },
		{ id: 'pastry', label: 'Десерти та випічка', selected: true },
		{ id: 'meat', label: 'Мʼясо та гриль', selected: false },
		{ id: 'streetfood', label: 'Стріт-фуд', selected: true },
		{ id: 'asian', label: 'Азійська кухня', selected: false },
		{ id: 'healthy', label: 'Здорове харчування', selected: false },
		{ id: 'seafood', label: 'Морепродукти', selected: false },
	]);

	toggleInterest(id: string): void {
		this.interests.update((items) =>
			items.map((item) =>
				item.id === id ? { ...item, selected: !item.selected } : item,
			),
		);
	}

	// === ПРИВАТНІСТЬ ТА СТАТУС ПРАЦІВНИКА (ТЗ: Privacy options) ===
	readonly isPublicProfile = signal(true);
	readonly isEmployeeActive = signal(false); // За ТЗ: за замовчуванням юзер не є працівником

	togglePublicProfile(): void {
		this.isPublicProfile.update((val) => !val);
	}

	toggleEmployeeActive(): void {
		this.isEmployeeActive.update((val) => !val);
	}

	// === ІГНОРОВАНІ АВТОРИ (ТЗ: Ignored authors після свайпу вліво) ===
	readonly ignoredAuthors = signal<string[]>([
		'Шеф Гордон',
		'FastFood Kitchen',
	]);

	unignoreAuthor(author: string): void {
		this.ignoredAuthors.update((list) => list.filter((a) => a !== author));
	}

	// === БЕЗПЕКА ТА ПАРОЛЬ ===
	readonly securityModel = signal<SecurityModel>({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	readonly securityForm = form(this.securityModel, securitySchema);

	readonly isSecurityDisabled = computed(() => {
		const m = this.securityModel();
		return (
			this.securityForm().invalid() || m.newPassword !== m.confirmPassword
		);
	});

	wSecuritySubmit(): void {
		submit(this.securityForm, (formTree) => {
			const payload = formTree().value() as SecurityModel;

			this.userService
				.changePassword(payload.currentPassword, payload.newPassword)
				.pipe(takeUntilDestroyed(this._destroyRef))
				.subscribe({
					next: () => {
						this.securityForm().reset();
						this.securityModel.set({
							currentPassword: '',
							newPassword: '',
							confirmPassword: '',
						});
					},
				});

			return Promise.resolve();
		});
	}

	// === МОВА ТА ТЕМА ===
	readonly languageName = computed(() => {
		const language = this.languageService.getLanguage(
			this.languageService.language(),
		);
		return language?.name ?? '';
	});

	readonly languageFlagSrc = computed(() => {
		switch (this.languageService.language()) {
			case 'ua':
			case 'uk':
				return '/flags/ukraine.svg';
			case 'en':
				return '/flags/united-kingdom.svg';
			default:
				return '';
		}
	});

	nextLanguage(): void {
		const languages = this.languageService.languages();
		if (!languages.length) return;

		const currentIndex = languages.findIndex(
			(language) => language.code === this.languageService.language(),
		);
		const nextIndex =
			currentIndex >= 0 && currentIndex < languages.length - 1
				? currentIndex + 1
				: 0;

		void this.translateService.setLanguage(languages[nextIndex].code);
	}
}
