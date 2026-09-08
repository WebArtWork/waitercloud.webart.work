import { Component, input, output, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from '@wawjs/ngx-ui';

export interface EmployeeFormData {
	id?: number | string;
	name: string;
	role: string;
	bio: string;
	avatarUrl: string;
	experience: string;
	restaurantName?: string;
	phone?: string;
	email?: string;
}

@Component({
	selector: 'employee-form',
	standalone: true,
	imports: [FormsModule, MaterialComponent],
	templateUrl: './employee-form.component.html',
	styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
	readonly initialData = input<EmployeeFormData | null>(null);
	readonly save = output<EmployeeFormData>();

	readonly formData = signal<EmployeeFormData>({
		name: '',
		role: '',
		bio: '',
		avatarUrl: '',
		experience: '',
		restaurantName: '',
		phone: '',
		email: '',
	});

	constructor() {
		effect(() => {
			const data = this.initialData();
			if (data) {
				this.formData.set({ ...data });
			}
		});
	}

	updateField<K extends keyof EmployeeFormData>(
		field: K,
		value: EmployeeFormData[K],
	) {
		this.formData.update((prev) => ({ ...prev, [field]: value }));
	}

	onSubmit() {
		this.save.emit(this.formData());
	}
}
