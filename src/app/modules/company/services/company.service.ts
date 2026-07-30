import { computed, inject, Injectable } from '@angular/core';
import { EmitterService } from '@wawjs/ngx-core';
import { CrudService } from '@wawjs/ngx-crud';
import { Company, CompanyInput } from '../interfaces/company.interface';

@Injectable({ providedIn: 'root' })
export class CompanyService extends CrudService<Company> {
	private readonly _emitterService = inject(EmitterService);

	readonly companies = computed(() => this.documents());

	constructor() {
		super({ name: 'company' });
		this.get().subscribe();
		this._emitterService.on('company_changed').subscribe(() => {
			this.get().subscribe();
		});
	}

	createCompany(company: CompanyInput) {
		return this.create(company as Company);
	}

	updateCompany(company: CompanyInput & { _id: string }) {
		return this.update(company as Company);
	}
}
