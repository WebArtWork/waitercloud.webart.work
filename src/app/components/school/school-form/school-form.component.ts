import { Component, input, output, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface SchoolFormData {
	id?: number | string;
	title: string;
	tagline?: string;
	description: string;
	imageUrl: string;
	address: string;
	duration: string;
}

@Component({
	selector: 'school-form',
	standalone: true,
	imports: [FormsModule, MaterialComponent],
	templateUrl: './school-form.component.html',
	styleUrl: './school-form.component.scss',
})
export class SchoolFormComponent {
	readonly initialData = input<SchoolFormData | null>(null);
	readonly save = output<SchoolFormData>();

	readonly formData = signal<SchoolFormData>({
		title: '',
		tagline: '',
		description: '',
		imageUrl: '',
		address: '',
		duration: '',
	});

	constructor() {
		effect(() => {
			const data = this.initialData();
			if (data) {
				this.formData.set({ ...data });
			}
		});
	}

	updateField<K extends keyof SchoolFormData>(
		field: K,
		value: SchoolFormData[K],
	) {
		this.formData.update((prev) => ({ ...prev, [field]: value }));
	}

	onSubmit() {
		this.save.emit(this.formData());
	}
}
