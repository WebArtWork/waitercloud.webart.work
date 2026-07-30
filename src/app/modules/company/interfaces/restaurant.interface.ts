import { CompanyEntity } from './company-entity.interface';

export interface Restaurant extends CompanyEntity<Restaurant> {
	name: string;
	address?: string;
	contact?: string;
}
