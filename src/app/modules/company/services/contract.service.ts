import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Contract } from '../interfaces/contract.interface';

@Injectable({ providedIn: 'root' })
export class ContractService extends CrudService<Contract> {
	constructor() { super({ name: 'companydelivercontract' }); }
}
