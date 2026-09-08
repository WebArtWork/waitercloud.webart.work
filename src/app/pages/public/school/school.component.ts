import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import {
	SchoolViewComponent,
	SchoolViewModel,
} from '../../../components/school/school-view/school-view.component';

@Component({
	selector: 'page-school',
	standalone: true,
	imports: [SchoolViewComponent],
	templateUrl: './school.component.html',
})
export class SchoolComponent {
	readonly schoolId = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(
			map((params) => params.get('id')),
		),
		{ initialValue: null },
	);

	readonly school = signal<SchoolViewModel>({
		id: this.schoolId() || '1',
		title: 'Culinary Academy',
		tagline: 'Професійні кулінарні програми для майбутніх шефів',
		description:
			'Практичні курси та майстер-класи від провідних шеф-кухарів для тих, хто прагне опанувати високу кухню, пекарське мистецтво та ресторанний менеджмент.',
		imageUrl:
			'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
		address: 'Київ, вул. Академічна, 15',
		duration: 'Курси від 2 тижнів до 6 місяців',
		instructors: [
			{
				id: '1',
				name: 'Шеф Маріо',
				role: 'Головний інструктор (Італійська кухня)',
				avatarUrl:
					'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop',
			},
		],
		recipes: [
			{
				id: 1,
				title: 'Трюфельна паста',
				imageUrl:
					'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
				author: 'Culinary Academy',
			},
			{
				id: 2,
				title: 'Піца Маргарита',
				imageUrl:
					'https://images.unsplash.com/photo-1513104890138-7c749659a591',
				author: 'Culinary Academy',
			},
		],
	});
}
