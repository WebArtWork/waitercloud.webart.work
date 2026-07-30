import { applicationForm } from './forms/application.form';
import { commentForm } from './forms/comment.form';
import { contractForm } from './forms/contract.form';
import { employeeForm } from './forms/employee.form';
import { jobForm } from './forms/job.form';
import { proposalForm } from './forms/proposal.form';
import { recipeForm } from './forms/recipe.form';
import { restaurantForm } from './forms/restaurant.form';
import { schoolForm } from './forms/school.form';

export type CompanyEntityName =
	| 'recipe'
	| 'restaurant'
	| 'school'
	| 'employee'
	| 'job'
	| 'application'
	| 'proposal'
	| 'contract'
	| 'comment';

/** The complete and intentionally closed Waiter Cloud company-domain entity set. */
export const COMPANY_ENTITY_FORMS = {
	recipe: recipeForm,
	restaurant: restaurantForm,
	school: schoolForm,
	employee: employeeForm,
	job: jobForm,
	application: applicationForm,
	proposal: proposalForm,
	contract: contractForm,
	comment: commentForm,
} as const;
