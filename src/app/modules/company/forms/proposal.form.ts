export const proposalForm = {
	formId: 'proposal', title: 'Proposal', components: [
		{ name: 'Input', key: 'employee', props: { label: 'Employee ID', focused: true } },
		{ name: 'Input', key: 'job', props: { label: 'Job ID' } },
		{ name: 'Input', key: 'application', props: { label: 'Application ID' } },
		{ name: 'Input', key: 'conditions', props: { label: 'Conditions', type: 'textarea' } },
	],
};
