import { CompanyEntity } from './company-entity.interface';

export interface Recipe extends CompanyEntity<Recipe> {
	title: string;
	description: string;
	ingredients: string[];
	instructions: string[];
	restaurant?: string;
	forked?: string;
}
