export const commentForm = {
	formId: 'comment', title: 'Comment', components: [
		{ name: 'Input', key: 'entityType', props: { label: 'Entity type', focused: true } },
		{ name: 'Input', key: 'entity', props: { label: 'Entity ID' } },
		{ name: 'Input', key: 'content', props: { label: 'Comment', type: 'textarea' } },
		{ name: 'Input', key: 'rating', props: { label: 'Rating', type: 'number' } },
	],
};
