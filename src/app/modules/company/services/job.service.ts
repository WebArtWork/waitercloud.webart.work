import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Job } from '../interfaces/job.interface';

@Injectable({ providedIn: 'root' })
export class JobService extends CrudService<Job> {
	constructor() { super({ name: 'companydeliverjob' }); }
}
