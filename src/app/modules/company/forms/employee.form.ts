export const employeeForm = {
	formId: 'employee', title: 'Employee', components: [
		{ name: 'Tags', key: 'roles', props: { label: 'Professional roles' } },
		{ name: 'Input', key: 'experience', props: { label: 'Experience', type: 'textarea' } },
		{ name: 'Input', key: 'availability', props: { label: 'Availability' } },
		{ name: 'Input', key: 'workFormat', props: { label: 'Work format' } },
	],
};
