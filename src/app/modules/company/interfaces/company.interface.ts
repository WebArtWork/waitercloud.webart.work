import { CrudDocument } from '@wawjs/ngx-crud';

export interface CompanySocialUrl {
	name: string;
	icon: string;
	url: string;
}

export interface CompanyEmployee {
	user: string;
	features: string[];
}

/** Business account used to manage restaurant, school, and employment records. */
export interface Company extends CrudDocument<Company> {
	name: string;
	slug: string;
	description: string;
	businessType: string;
	teamSize: string;
	logo: string;
	domain: string;
	siteUrl: string;
	phone: string;
	language: string;
	languages: string[];
	socials: CompanySocialUrl[];
	owner: string;
	employees: CompanyEmployee[];
}

export interface CompanyInput {
	_id?: string;
	name: string;
	businessType: string;
	description: string;
	siteUrl: string;
	phone: string;
	teamSize: string;
}
