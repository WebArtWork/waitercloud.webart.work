import { CompanyEntity } from './company-entity.interface';

export interface Job extends CompanyEntity<Job> {
	title: string;
	description: string;
	business: string;
	employmentType?: string;
	workFormat?: string;
	salary?: string;
}
