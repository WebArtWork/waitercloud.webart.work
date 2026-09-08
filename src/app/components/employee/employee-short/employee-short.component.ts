import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface EmployeeShortModel {
	id: number | string;
	name: string;
	role: string;
	avatarUrl: string;
	experience?: string;
	restaurantName?: string;
}

@Component({
	selector: 'employee-short',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './employee-short.component.html',
	styleUrls: ['./employee-short.component.scss'],
})
export class EmployeeShortComponent {
	readonly employee = input.required<EmployeeShortModel>();
}
