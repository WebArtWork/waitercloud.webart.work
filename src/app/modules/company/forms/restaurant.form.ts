export const restaurantForm = {
	formId: 'restaurant', title: 'Restaurant', components: [
		{ name: 'Input', key: 'name', props: { label: 'Name', focused: true } },
		{ name: 'Input', key: 'description', props: { label: 'Description', type: 'textarea' } },
		{ name: 'Input', key: 'address', props: { label: 'Address' } },
		{ name: 'Input', key: 'contact', props: { label: 'Contact' } },
	],
};
