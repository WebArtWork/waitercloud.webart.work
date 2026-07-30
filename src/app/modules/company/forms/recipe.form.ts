export const recipeForm = {
	formId: 'recipe', title: 'Recipe', components: [
		{ name: 'Input', key: 'title', props: { label: 'Title', focused: true } },
		{ name: 'Input', key: 'description', props: { label: 'Description', type: 'textarea' } },
		{ name: 'Tags', key: 'ingredients', props: { label: 'Ingredients' } },
		{ name: 'Tags', key: 'instructions', props: { label: 'Instructions' } },
	],
};
