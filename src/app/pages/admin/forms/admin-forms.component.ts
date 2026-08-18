import { Component } from '@angular/core';
import { FormsComponent } from '@wawjs/ngx-bos';
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
export class AdminFormsComponent extends FormsComponent {
	constructor() {
		super();

		const formLink = this.config.buttons.find((button) => button.icon === 'build');
		if (formLink) {
			formLink.hrefFunc = (form) =>
				`/admin/form?id=${encodeURIComponent(form.formId)}`;
		}
	}
}
