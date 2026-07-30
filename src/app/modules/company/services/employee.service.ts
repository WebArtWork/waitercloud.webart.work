import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Employee } from '../interfaces/employee.interface';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends CrudService<Employee> {
	constructor() { super({ name: 'companydeliveremployee' }); }
}
