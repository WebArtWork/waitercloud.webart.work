import { CompanyEntity } from './company-entity.interface';

export interface Employee extends CompanyEntity<Employee> {
	roles: string[];
	experience?: string;
	availability?: string;
	workFormat?: string;
	city?: string;
}
