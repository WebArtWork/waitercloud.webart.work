import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { School } from '../interfaces/school.interface';

@Injectable({ providedIn: 'root' })
export class SchoolService extends CrudService<School> {
	constructor() { super({ name: 'companydeliverschool' }); }
}
