import { CompanyEntity } from './company-entity.interface';

export interface Contract extends CompanyEntity<Contract> {
	employee: string;
	business: string;
	job?: string;
	application?: string;
	proposal?: string;
	effectiveDate?: string;
	expirationDate?: string;
}
