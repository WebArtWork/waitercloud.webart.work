import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '@wawjs/ngx-bos';
import { TableComponent } from '@wawjs/ngx-ui';

@Component({
	imports: [TableComponent],
	template: `
		<wtable
			[rows]="documents()"
			[columns]="columns"
			[config]="config"
			title="Forms"
		/>
	`,
})
export class AdminFormComponent extends FormComponent {
	constructor() {
		super();

		const formId =
			inject(ActivatedRoute).snapshot.queryParamMap.get('id') ?? '';
		Object.defineProperty(this, 'formId', { value: formId });
		this.setDocuments();
	}
}
