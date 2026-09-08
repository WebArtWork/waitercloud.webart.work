import { Component, input } from '@angular/core';

export interface EmployeeIconModel {
	id: number | string;
	name: string;
	avatarUrl: string;
}

@Component({
	selector: 'employee-icon',
	standalone: true,
	templateUrl: './employee-icon.component.html',
	styleUrls: ['./employee-icon.component.scss'],
})
export class EmployeeIconComponent {
	readonly employee = input.required<EmployeeIconModel>();
}
