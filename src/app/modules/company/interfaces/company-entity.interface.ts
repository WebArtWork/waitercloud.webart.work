import { CrudDocument } from '@wawjs/ngx-crud';

/** Common fields shared by Waiter Cloud domain documents. */
export interface CompanyEntity<T> extends CrudDocument<T> {
	title?: string;
	description?: string;
	status?: string;
	visibility?: 'public' | 'private' | 'restricted';
	country?: string;
	createdBy?: string;
}
