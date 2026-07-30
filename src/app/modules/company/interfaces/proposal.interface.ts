import { CompanyEntity } from './company-entity.interface';

export interface Proposal extends CompanyEntity<Proposal> {
	employee: string;
	job?: string;
	application?: string;
	business: string;
	conditions?: string;
}
