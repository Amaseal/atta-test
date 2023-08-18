import type { Translation } from '../i18n-types'

const lv = {
	link: "/lv{0}",
	nav: {
		categories: "Pakalpojumi",
		gallery: "Mūsu darbi",
		about: "Kontakti",
		search: "Meklēt..."
	},
	buttons: {
		hero: "Produkti",
		categories: "Aplūkot",
		promo:"Apskatīt",
		send: "Sūtīt"
	},
	form: {
		message: "Nosūti ziņu:",
		name: "Vārds",
		surname: "Uzvārds",
		email: "E-pasts",
		text: "Ziņa",
		success: "Paldies! Jūsu ziņa ir saņemta!"
	},
	slider: {
		price: "Cena:",
		quantity: "Daudzums:",
		colors: "Pieejamās krāsas:",
		price_text: "Par citu daudzumu cenām lūgums sazināties ar mums"
		
	},
	gallery: {
		more: "Apskati vairāk:"
	},
	seo: {
		header: {
			facebook: "Facebook",
			instagram: "Instagram"
		},
		search:{
			inputLabel: "Meklēt",
			placeholder: "Meklēt...",
			openSearch: "Atvērt meklēšanas lauku",
			searchButton: "Meklēt"
		},
		slider: {
			next: "Nākamais",
			previous: "iepriekšējais",
			goTo: "Iet us slaidu"
		},
		gallery: {
			more: "Apskatīt vairāk no mūsu darbiem"
		}
	},
	search: {
		notFound: "Neviens produkts netika atrasts, lūdzu mēģini vēlreiz!"
	},
} satisfies Translation

export default lv
