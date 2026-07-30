import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Proposal } from '../interfaces/proposal.interface';

@Injectable({ providedIn: 'root' })
export class ProposalService extends CrudService<Proposal> {
	constructor() { super({ name: 'companydeliverproposal' }); }
}
