import type { BaseTranslation } from '../i18n-types'

const en = {
	link: '/en{0}',
	nav: {
		categories: "Services",
		gallery: "Our work",
		about: "Contacts",
		search: "Search..."
	},
	buttons: {
		hero: "Products",
		categories: "Explore",
		promo:"View",
		send: "Send"
	},
	form: {
		message: "Send us a messege:",
		name: "Name",
		surname: "Surname",
		email: "E-mail",
		text: "Text",
		success: "Thank you! We have recieved your message!"
	},
	slider: {
		price: "Price:",
		quantity: "Quantity:",
		colors: "Available Colors:",
		price_text: "For other quantities please contact us!"
	},
	search: {
		notFound: "No products found, please try again!"
	},
	gallery: {
		more: "Find more:"
	},
	seo: {
		header: {
			facebook: "Facebook",
			instagram: "Instagram",
		},
		search:{
			inputLabel: "Search",
			placeholder: "Search",
			openSearch: "Open Search input",
			searchButton: "Search"
		},
		slider: {
			next: "Next",
			previous: "Previous",
			goTo: "Go to slide"
		},
		gallery: {
			more: "See more of our work"
		}
	}
} satisfies BaseTranslation

export default en
