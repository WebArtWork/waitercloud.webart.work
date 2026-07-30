import { CompanyEntity } from './company-entity.interface';

export interface Comment extends CompanyEntity<Comment> {
	entity: string;
	entityType: string;
	content: string;
	rating?: number;
}
