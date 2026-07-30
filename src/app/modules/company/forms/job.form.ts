export const jobForm = {
	formId: 'job', title: 'Job', components: [
		{ name: 'Input', key: 'title', props: { label: 'Title', focused: true } },
		{ name: 'Input', key: 'description', props: { label: 'Description', type: 'textarea' } },
		{ name: 'Input', key: 'employmentType', props: { label: 'Employment type' } },
		{ name: 'Input', key: 'workFormat', props: { label: 'Work format' } },
		{ name: 'Input', key: 'salary', props: { label: 'Salary' } },
	],
};
