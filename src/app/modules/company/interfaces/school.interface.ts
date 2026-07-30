import { CompanyEntity } from './company-entity.interface';

export interface School extends CompanyEntity<School> {
	name: string;
	address?: string;
	contact?: string;
}
