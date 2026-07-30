import { CompanyEntity } from './company-entity.interface';

export interface Application extends CompanyEntity<Application> {
	user: string;
	job: string;
	employee: string;
	coverLetter?: string;
}
