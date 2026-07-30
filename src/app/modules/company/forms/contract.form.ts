export const contractForm = {
	formId: 'contract', title: 'Contract', components: [
		{ name: 'Input', key: 'employee', props: { label: 'Employee ID', focused: true } },
		{ name: 'Input', key: 'job', props: { label: 'Job ID' } },
		{ name: 'Input', key: 'conditions', props: { label: 'Conditions', type: 'textarea' } },
		{ name: 'Input', key: 'effectiveDate', props: { label: 'Effective date', type: 'date' } },
		{ name: 'Input', key: 'expirationDate', props: { label: 'Expiration date', type: 'date' } },
	],
};
