import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'restaurant-form',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './restaurant-form.component.html',
	styleUrl: './restaurant-form.component.scss',
})
export class RestaurantFormComponent {
	readonly saved = output<any>();
	readonly cancelled = output<void>();

	formData = {
		title: '',
		description: '',
		imageUrl: '',
		address: '',
	};

	onSubmit() {
		this.saved.emit(this.formData);
	}

	onCancel() {
		this.cancelled.emit();
	}
}
