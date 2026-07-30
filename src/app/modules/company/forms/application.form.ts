export const applicationForm = {
	formId: 'application', title: 'Application', components: [
		{ name: 'Input', key: 'job', props: { label: 'Job ID', focused: true } },
		{ name: 'Input', key: 'employee', props: { label: 'Employee ID' } },
		{ name: 'Input', key: 'coverLetter', props: { label: 'Cover letter', type: 'textarea' } },
	],
};
