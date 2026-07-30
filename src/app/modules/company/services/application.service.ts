import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Application } from '../interfaces/application.interface';

@Injectable({ providedIn: 'root' })
export class ApplicationService extends CrudService<Application> {
	constructor() { super({ name: 'companydeliverapplication' }); }
}
