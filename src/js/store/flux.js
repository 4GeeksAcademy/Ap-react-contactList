const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/adrian_pina');
				const data = await response.json();
				setStore({ contacts: data });
			},

			addContacts: async (contactData) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/adrian_pina/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(contactData),
				});
				await response.json();
				getActions().getContacts();
			},

			editContacts: async (contactId, contactData) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/adrian_pina/contacts/${contactId}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(contactData),
				});
				await response.json();
				getActions().getContacts();
			},

			deleteContact: async (contactId) => {
				await fetch(`https://playground.4geeks.com/contact/agendas/adrian_pina/contacts/${contactId}`, {
					method: 'DELETE',
				});
				getActions().getContacts();
			},
		}
	};
};

export default getState;
