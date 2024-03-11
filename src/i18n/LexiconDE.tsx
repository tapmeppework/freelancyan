import type { Snippet } from '@framework'
import Lexicon0 from './LexiconABCD'
import Utils from '@bloc/Utils'

/**
 * @classdesc this class is used to set the texts in the German language.
 * @final
 */
export default class Lexicon<Miscellaneous = any> extends Lexicon0<Miscellaneous> {
	private static readonly zyxw = {
		index: {
			description: `
				Willkommen bei ${Lexicon.utilities.config.contact.business} 👋🏿.\n
				Mein Name ist ${Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ und ich bin ein erfahrener Webentwickler 🤘🏿.
			`,
		},
		pages: {
			services: {
				href: 'services',
				headline: 'Dienstleistungen',
				description: `
					Entdecken Sie meine umfassenden Webentwicklungsdienste als freiberuflicher Webentwickler, einschließlich Projektmanagement, Anforderungsanalyse, Entwicklung und mehr. Partnern Sie mit mir für eine reibungslose Online-Reise.
				`,
				preamble: `
					Als freiberuflicher Webentwickler bin ich Ihr engagierter Partner bei der Erstellung außergewöhnlicher Weblösungen. Entdecken Sie eine Vielzahl von Dienstleistungen, die darauf abzielen, Ihre Online-Präsenz zu steigern und Ihre digitalen Visionen zum Leben zu erwecken. Von Projektmanagement bis zur Umsetzung stehe ich Ihnen zur Verfügung, um Ihre Ideen in die Realität umzusetzen. Erfahren Sie mehr über meine Angebote unten und lassen Sie uns gemeinsam eine spannende Reise zur Exzellenz in der Webentwicklung beginnen.
				`,
			},
			portfolio: {
				href: 'portfolio',
				headline: 'Portfolio',
				description: `
					Entdecken Sie eine Auswahl meiner Webentwicklungsprojekte als Webentwickler. Tauchen Sie ein in eine Sammlung von Websites und Webanwendungen, die meine Expertise in der Erstellung ansprechender, funktionaler und visuell ansprechender Online-Erlebnisse widerspiegeln.
				`,
				preamble: `
					Willkommen in meinem Portfolio! Hier präsentiere ich stolz eine handverlesene Auswahl meiner Webentwicklungsprojekte, die jeweils das Ergebnis meiner Hingabe, Kreativität und technischen Fähigkeiten als Webentwickler darstellen. Durchstöbern Sie diese Beispiele, um aus erster Hand die vielfältige Palette von Websites und Webanwendungen zu erleben, die ich das Privileg hatte, zum Leben zu erwecken. Ob Sie nach Inspiration suchen oder Interesse daran haben, mit mir zusammenzuarbeiten, dieses Portfolio ist ein Beweis für mein Engagement, außergewöhnliche Online-Lösungen zu liefern.
				`,
			},
		},
	}

	_404 = {
		action: 'Zur Startseite',
	}
	abcd = {
		harmony: {
			error: `Etwas ist schiefgegangen. Bitte <a href='${Lexicon.utilities.contact}'>kontaktieren Sie den Administrator</a>.`,
			more: 'Mehr lesen',
			less: 'Weniger lesen',
			others: 'Andere',
			processing: 'In Verarbeitung ...',
			diashow: 'Diashow',
		},
		navigation: {
			header: {
				logo: Lexicon.tapmeppe.logo('Das Logo meiner freiberuflichen Unternehmung.'),
				aria: 'Mobile Kopfnavigation.'
			},
			footer: {
				copyright: (copy: Snippet, year: number) => <>Copyright {copy} {year} {Lexicon.utilities.config.contact.business}</>
			},
			carousel: {
				previous: 'Vorherige Folie',
				next: 'Nächste Folie',
				slide: 'Folie',
			},
			modal: {
				close: 'Schließen',
				languages: {
					headline: 'Spracherkennung',
					body: `Die Website ist derzeit auf '${this.label}' eingestellt. Möchten Sie lieber zu einer der folgenden Sprachen wechseln?`,
				},
				third: {
					party: {
						headline: 'Ich schätze Ihre Privatsphäre',
						body: <>Ich verwende Cookies 🍪, um Ihr Surferlebnis zu verbessern und den Datenverkehr zu analysieren. Durch Klicken auf 'Akzeptieren' stimmen Sie der Verwendung von Cookies von Drittanbietern zu.</>,
						accept: 'Akzeptieren',
					},
				},
			},
			schemes: {
				auto: 'Auto',
				dark: 'Dunkel',
				light: 'Hell',
			},
			scroll: {
				top: 'Scrollen Sie nach oben.',
			},
		},
		networks: {
			linkedin: { href: 'https://www.linkedin.com/company/tapmeppe-work' },
			github: { href: Lexicon.tapmeppe.networks.github },
			youtube: {
				href: '',
				title: 'Bald verfügbar!',
			},
		},
		pages: {
			header: {
				index: {
					href: 'index',
					headline: 'Start',
					...Lexicon.zyxw.index,
					preamble: <>Mein Name ist {Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ und ich bin ein erfahrener Webentwickler 🤘🏿.</>,
				},
				...Lexicon.zyxw.pages,
				resume: {
					href: 'resume',
					headline: 'Lebenslauf',
					description: `
						Erkunden Sie meinen beruflichen Werdegang als Webentwickler anhand meines Lebenslaufs. Entdecken Sie die Fähigkeiten, Erfahrungen und Qualifikationen, die mich zu einer zuverlässigen und kompetenten Wahl für Webentwicklungsprojekte machen.
					`,
					preamble: `
						Willkommen auf meiner Lebenslauf-Seite! Hier gebe ich Ihnen einen Einblick in meine Karriere als Webentwickler. Ich habe meine Fähigkeiten, Erfahrungen und Qualifikationen zusammengefasst, um Ihnen einen Überblick darüber zu bieten, was ich mitbringe. Ganz gleich, ob Sie an einer Zusammenarbeit an einem Projekt interessiert sind oder einfach mehr über meinen beruflichen Hintergrund erfahren möchten, dieser Lebenslauf ist eine wertvolle Ressource, um meine berufliche Reise in der Webentwicklung zu verstehen.
					`,
				},
				pricing: {
					href: 'pricing',
					headline: 'Preise',
					description: `
						Willkommen am Tor von Wert und Exzellenz. Ich lege großen Wert darauf, erstklassige Web-Dienstleistungen anzubieten, die darauf abzielen, Ihr digitales Abenteuer zu verbessern. Meine Preise spiegeln nicht nur Bezahlbarkeit wider, sondern auch ein Bekenntnis zu Qualität und Innovation. Entdecken Sie die Möglichkeiten und lassen Sie uns gemeinsam Ihre digitale Landschaft transformieren.
					`,
					preamble: `
						Willkommen am Tor von Wert und Exzellenz. Ich lege großen Wert darauf, erstklassige Web-Dienstleistungen anzubieten, die darauf abzielen, Ihr digitales Abenteuer zu verbessern. Meine Preise spiegeln nicht nur Bezahlbarkeit wider, sondern auch ein Bekenntnis zu Qualität und Innovation. Entdecken Sie die Möglichkeiten und lassen Sie uns gemeinsam Ihre digitale Landschaft transformieren.
					`,
				},
				gallery: {
					href: 'gallery',
					headline: '',
				},
			},
			footer: {
				contact: {
					href: 'contact',
					headline: 'Kontakt',
					description: `
						Vernetzen Sie sich mit mir, um das spannende und humorvolle Alltagsleben eines vielseitigen Polymaths zu entdecken, der Raketenabenteuer 🚀, die Erziehung eines frühreifen Kleinkindes 👶 und nächtliches Computercoding 💻 in Einklang bringt.
					`,
					preamble: <>
						Wenn ich nicht gerade in meinem raketengetriebenen Rennwagen 🚀 die tückischen Gipfel des Himalaja erobern will, während ich gleichzeitig im Alleingang das Rätsel der Kaltfusion knackt, um den begehrten Nobelpreis zu sichern, widme ich mich zu Hause der edlen Aufgabe, meinem frühreifen Kleinkind 👶 komplexe soziale Konzepte um 3 Uhr ⏰ morgens zu erklären. Und nach einer kleinen, aber effektiven Bestechungsdiplomatie überzeuge ich meinen Kleinen erfolgreich davon, dass 3 Uhr morgens tatsächlich die ausgewiesene Schlafenszeit ist.<br></br>
						Aber glauben Sie, dass ich dann ins Land der Träume abdrifte? Natürlich nicht 😄! Ich bin wieder direkt vor meinem Computer; denn, wie es sich herausgestellt hat, Schlaf ist für einen vielseitigen Polymathen wie mich überbewertet 😎.<br></br>
						Wenn Sie neugierig auf den Rest dieser spannenden Geschichte sind, zögern Sie nicht, sich zu melden und das große Epos zu entdecken, das mein Alltag ist! 😉
					</>,
				},
				legal: {
					href: 'legal',
					headline: 'Impressum',
					description: `Entdecken Sie unsere Impressumsseite und erhalten Sie Einblicke in die rechtliche Identität hinter unserer Plattform. Erfahren Sie mehr über unsere Unternehmensdetails, Kontaktdaten und rechtlichen Verpflichtungen. Transparenz und Vertrauen stehen im Mittelpunkt unserer Verpflichtung Ihnen gegenüber.`,
				},
				privacy: {
					href: 'privacy',
					headline: '', //'Privacy policy',
					description: ``,
				},
			},
			phantom: {
				_404: {
					headline: 'Seite nicht gefunden.',
					...Lexicon.zyxw.index,
					preamble: <>
						Oops 😅! Sie haben sich ins digitale Wildnis gewagt, und es scheint, Sie haben einen falschen Weg eingeschlagen 🗺️. Keine Sorge, ich bin im Einsatz, um Sie aus diesem Cyber-Dschungel zu retten 🦸🏿‍♂️! In der Zwischenzeit können Sie gerne <a href={Lexicon.utilities.portfolio}>einige meiner digitalen Wunder erkunden</a> 🚀🌟. Wenn Sie sofortige Hilfe benötigen, <a href={Lexicon.utilities.contact}>kontaktieren Sie den Administrator</a> 📞👨🏿‍💻. Bis dahin genießen Sie diesen kleinen Umweg durch das virtuelle Universum 🌌🌠!
					</>,
				},
				// tapmeppe: {
				// 	headline: "Don't click here",
				// },
				gallery: {
					href: 'gallery',
					headline: 'Galerie',
				},
			},
		},
	}
	contact = {
		message: {
			subject: 'Guten Morgen und guten Abend.',
			body: `Hallo! Ich würde gerne den Rest der Geschichte erfahren. 😅`,
		},
		me: Lexicon.tapmeppe.contact.me,
		networks: 'Folgen Sie mir',
		office: {
			headline: 'Öffnungszeiten',
			content: <>Bitte vereinbaren Sie einen Termin.</>
		},
		location: {
			headline: 'Veni, vidi, vici',
			zoom: Lexicon.tapmeppe.contact.zoom,
			error: 'Die Adresse konnte nicht gefunden werden.',
			title: 'Hier findet die Show statt.',
			// coordinates: Lexicon.tapmeppe.contact.coordinates,
		},
	}
	index = {
		about: {
			headline: Lexicon.tapmeppe.contact.me,
			body: <>
				Ich habe mich darauf spezialisiert, <strong>maßgeschneiderte Online-Lösungen</strong> zu entwickeln, die sowohl Einzelpersonen als auch kleinen bis mittelständischen Unternehmen helfen, im digitalen Zeitalter erfolgreich zu sein. Egal, ob Sie Ihre Online-Präsenz etablieren, Ihre bestehende Website überarbeiten oder eine maßgeschneiderte Webanwendung entwickeln möchten; mein Ziel ist es, Ihre Vision zur Realität werden zu lassen.<br></br>
				Mein berufliches Abenteuer in der Webentwicklung begann um das Jahr {Lexicon.tapmeppe.resume.min.value}, und ich habe aus erster Hand die transformative Kraft der digitalen Landschaft erlebt.<br></br>
				Lassen Sie uns zusammenarbeiten, um Ihre einzigartige Marke im Web zum Leben zu erwecken.
			</>,
			contact: `Nehmen Sie Kontakt auf 📧.<br/>Lassen Sie uns quatschen 💬!`,
		},
		preamble: {
			badge: <>Digitale Zauberei seit {Lexicon.tapmeppe.resume.min.value}</>,
			body: [
				'Freiberuflicher Webentwickler',
				'Umsetzung von Web-Lösungen',
				'Verwandlung von Ideen in digitale Produkte',
				'Kurz gesagt...',
			],
			headline: 'Ihr Partner für Online-Lösungen.',
			pages: Lexicon.zyxw.pages,
		},
		profile: Lexicon.tapmeppe.profile('Das Profilbild.'),
	}
	legal = [
		[
			{
				headline: {
					primary: 'Angaben gemäß § 5 TMG',
				},
				paragraphs: [
					<>
						{Lexicon.utilities.config.contact.name}<br></br>
						{Lexicon.utilities.config.contact.address}
					</>
				],
			},
			{
				headline: {
					primary: 'Kontakt',
				},
				paragraphs: [
					<>
						E-Mail: {Lexicon.utilities.config.contact.email}<br></br>
					</>
				],
			},
			// {
			// 	headline: {
			// 		primary: 'Umsatzsteuer-ID',
			// 	},
			// 	paragraphs: [
			// 		<>
			// 			Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <strong>{Lexicon.tapmeppe.legal.tax}</strong>.
			// 		</>
			// 	],
			// },
		],
	]
	privacy = []
	portfolio = {
		headline: 'Enthüllen Sie meine innovativen Projekte',
		mode: Lexicon.utilities.modes.timeline,
		content: [
			{
				image: Lexicon.tapmeppe.images.portfolio.kemitnsure,
				alt: 'Kemit & Sure logo',
				timeframe: 'Januar 2024 - Mai 2024',
				headline: `Website-Relaunch`,
				subline: 'Kemit & Sure SARL',
				children: [
					<>
						Nach einem Jahr der Umstrukturierung im Jahr 2023 hatte das Team von Kemit & Sure die Gelegenheit, den Versicherungsbedarf in Kamerun und innerhalb der afrikanischen (kamerunischen) Diaspora besser zu verstehen. Das Jahr 2024 sieht vielversprechend aus, mit einer großen Umgestaltung der Website, die ein außergewöhnliches Erlebnis bieten soll.
					</>,
				],
				badges: ['CSS', 'HTML', 'Javascript', 'MySQL', 'PHP', 'WordPress',],
				links: [
					{
						label: 'Anzeige',
						href: `https://www.linkedin.com/posts/donald-mekountchou-529378140_kemitandsure-partagezlamour-innovation-activity-7147896260417552384-igoi`,
					},
				],
			},
			{
				// @see https://de.indeed.com/viewjob?hl=de&jk=e2610f3603419f46&tk=1hijt6qj8pbqg800
				image: Lexicon.tapmeppe.images.portfolio.bergemann,
				alt: 'Bergemann & Höhne GbR logo',
				timeframe: 'November 2023 - Februar 2024',
				headline: `Dozent für Frontend (IT-Weiterbildung)`,
				subline: 'Bergemann & Höhne GbR',
				children: [
					<>
						Fachliche Umsetzung des Unterrichts der Weiterbildung: Umsetzung des Lehrplans, Gestaltung des Wochenplans und der Unterrichtsstunden, Betreuung der 10-köpfigen Gruppe, aber auch Betreuung einzelner Schüler im One-on-One-Format (Inaltliche Unterstützung bei den jeweiligen Problemlagen).
					</>,
					<>
						Für die persönlichen Probleme der Teilnehmer werden wir durch eine Sozialpädagogin unterstützt (z.B. Während der Festlegung des individuellen Lerntempos).
					</>,
					<>
						Verbesserung und Mitgestaltung der Schulungsinhalte und der Prozesse im ganzen Team.
					</>,
				],
				badges: ['CSS', 'Git', 'HTML', 'JavaScript', 'Mockups', 'React', 'Sass', 'SCRUM', 'Tailwind',],
				links: [
					{
						label: 'Website',
						href: `https://bergemann-hoehne.com/`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.freelancyan,
				alt: 't@pm3pp3 w0rk logo in grau.',
				timeframe: 'August 2023 - heute',
				headline: `Freelancyan`,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						Ein Open-Source-Framework 🌐, das Einzelpersonen und kleine Unternehmen befähigt, einfache Websites 🚀 zu erstellen. Es ist auf der Grundlage von <a href='https://astro.build/' target='_blank'>Astro JS</a>, <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a>, <a href='https://lesscss.org/' target='_blank'>Less CSS</a>, <a href='https://www.solidjs.com/' target='_blank'>Solid JS</a>, <a href='https://www.typescriptlang.org/' target='_blank'>TypeScript</a> und <a href='https://webpack.js.org/' target='_blank'>webpack</a> aufgebaut. Es ebnet den Weg für Ihre digitalen Projekte 📲.
					</>,
					<>
						Diese Website wird von diesem eigenen Framework betrieben.
					</>,
				],
				badges: ['Astro JS', 'Bootstrap', 'Chat GPT', 'Less CSS', 'Node JS', 'Solid JS', 'TypeScript', 'webpack',],
				links: [
					{
						label: 'Quellcode',
						href: `${Lexicon.tapmeppe.networks.github}/freelancyan`,
						title: 'Jede Woche neue Funktionen. 😜',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.logo,
				alt: 'Vollständiges Logo von SIGMA-ELEKTRO GmbH.',
				timeframe: 'März 2023 - Juni 2023',
				headline: `Infrastrukturmigration`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						In meiner letzten Position bei <em>SIGMA SPORT</em> ist meine Hauptaufgabe gewesen, den nahtlosen Wissenstransfer an meinen Nachfolger zu erleichtern. Darüber hinaus habe ich die Migration der Webinfrastruktur des Unternehmens von dem vorherigen Serveranbieter zu dem neuen Anbieter vorangetrieben, und das alles im gleichen Zeitrahmen.
					</>,
					<>
						Während des Projekts haben wir unsere Bemühungen auf folgende Schlüsselaufgaben konzentriert:
						<mark>1</mark> Bewertung, Identifizierung und Priorisierung verschiedener <span title='Vor der Migration wurden im Unternehmen über <strong>150</strong> Domains und Subdomains betrieben.'>für die Migration geeigneter Unternehmensanwendungen</span>.
						<mark>2</mark> Koordination des Migrationsprozesses mit Produktverantwortlichen, dem Vorstand und Kollegen, die diese Anwendungen täglich nutzten.
						<mark>3</mark> Gründliche Dokumentation jeder Anwendung vor der Migration.
						<mark>4</mark> Durchführung der Migration, einschließlich gelegentlicher Upgrades, umfassender Tests und notwendiger Refaktorisierung der Anwendungen.
						<mark>5</mark> Der Höhepunkt unserer Arbeit bestand darin, die Anwendungen erfolgreich in die neue Umgebung zu überführen.
					</>,
				]
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.newsletter,
				alt: 'Ein Screenshot des Beta-Tester-Formulars.',
				timeframe: 'Oktober 2022 - April 2023',
				headline: 'Newsletter-Formular-Framework',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Im Jahr 2022 haben wir ein leichtgewichtiges Framework für Newsletter-Formulare entwickelt. Diese innovative Lösung wurde schrittweise in alle Newsletter-Formulare von SIGMA SPORT implementiert. Ein Prozess, der sich über etwa 7 Monate erstreckte.
					</>,
					<>
						Die wichtigsten Funktionen umfassen:
						<mark>1</mark> Eine benutzerfreundliche Oberfläche, die flexibel zusammengestellt werden kann.
						<mark>2</mark> Ein <span title="Ein Server, der als Reverse-Proxy fungiert.">Server</span> zur Datenverarbeitung, der für das Empfangen, Validieren und Weiterleiten von Daten an das Newsletter-Center verantwortlich ist.
						<mark>3</mark> Schließlich ein über eine <span title='API ist das Akronym für Application Programming Interface. Ein Softwarevermittler, der es zwei Anwendungen ermöglicht, miteinander zu kommunizieren.'>API</span> zugängliches Newsletter-Center.
					</>,
				],
				badges: ['API', 'Bootstrap', 'CSS', 'HTML', 'Javascript', 'PHP',],
				links: [
					{
						label: 'Beta-Tester',
						href: `https://betatester.sigmasport.com/${this.language}/`,
					},
					{
						label: 'B2C',
						href: `https://consumer-newsletter.sigmasport.com/${this.language}/`,
					},
					{
						label: 'B2B',
						href: `https://dealer-newsletter.sigmasport.com/${this.language}/`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.cyclecomputing,
				alt: 'Ein Screenshot der Startseite.',
				timeframe: 'September 2022 - Dezember 2022',
				headline: `Website-Relaunch (VDO)`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Die <a href='#sigmasport-website-relaunch'>Neugestaltung der Website von SIGMA SPORT</a> brachte ein interessantes Nebenprodukt hervor: ein stabiles und wiederverwendbares <span title="<a href='https://wordpress.org/'>WordPress</a> ist ein Content-Management-System für Websites.">WordPress-Theme</span>. Wir haben dieses Theme dupliziert und angepasst, um perfekt zur Gesamtdesign der <span title='VDO cyclecomputing'>zweiten Marken</span> des Unternehmens zu passen.
					</>,
					<>
						Doch unsere größte Herausforderung während dieses Prozesses bestand darin, die Feinheiten des Informationsmanagements zu bewältigen und eine effektive Content-Strategie zu entwickeln.
					</>,
				],
				badges: ['CSS', 'HTML', 'Javascript', 'MySQL', 'PHP', 'WordPress',],
				links: [
					{
						label: 'Website',
						href: 'https://vdocyclecomputer.com/',
					},
				],
			},
			{
				id: 'sigmasport-website-relaunch',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.website,
				timeframe: 'January 2021 - February 2023',
				headline: `Relaunch & WEBSTORE v2`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Das herausragendste Produkt der Automatisierungskampagne von SIGMA SPORT war die Neugestaltung der Unternehmenswebsite. Die neue Website basierte auf <a href="https://wordpress.org/" target="_blank">WordPress</a> und <a href='https://woocommerce.com/' target='_blank' title='Eine e-Commerce-Plattform, die auf WordPress basiert.'>WooCommerce</a>.Sie vereinte die Marketing- und Handels-<span title="Unter anderem von der alten Website.">Funktionen</span>, den neuen Online-Blog sowie den neuen Online-Shop in einer gut gestalteten Website.
					</>,
					<>
						Weitere Informationen finden Sie im Abschnitt <a href="#sigmasport-automation-main-processes">Automatisierung der Hauptprozesse</a>.
					</>,
				],
				badges: [
					'Anforderungsanalyse', 'Kommunikation', 'Konzeption', 'Koordinierung',
					'Javascript', 'PHP',
					'WordPress', 'WooCommerce'
				],
				links: [
					{
						label: 'Current design',
						href: 'https://sigmasport.com/',
					},
					{
						label: 'Old design',
						href: `https://more.sigmasport.com/${this.language}/produkte`,
						title: 'The former homepage is now employed as an archive, that has been stripped of all complexe functionalities.',
					},
				],
			},
			{
				id: 'sigmasport-automation-main-processes',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.website,
				timeframe: 'Januar 2021 - Februar 2023',
				headline: 'Automatisierung der Hauptprozesse.',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Nach dem erfolgreichen Start und der laufenden Wartung seines ersten <a href='#sigmasport-shop-launch'>Online-Shops</a>, unternahm SIGMA SPORT einen bedeutenden Schritt in Übereinstimmung mit der Unternehmensvision für das Jahrzehnt 2020 - 2030. Das Unternehmen entschied sich, engere Verbindungen zwischen seiner Hauptwebsite, dem Online-Blog, dem Online-Shop, dem ERP-System, dem Ticketsystem, dem Buchhaltungssystem und den Newsletter-Tools herzustellen. Dieser strategische Schritt wurde unternommen; um die Hauptgeschäftsprozesse zu automatisieren, das Gesamterlebnis der Benutzer zu verbessern und sowohl geschätzten Kunden als auch Mitarbeitern zugute zu kommen.
					</>,
					<>
						Als Leitender Entwickler bei SIGMA SPORT hatte ich das Privileg, die folgenden Hauptverantwortlichkeiten zu übernehmen:
						<mark>1</mark> Die Führung bei der Entwicklung der neuen Website, des Online-Blogs und des Online-Shops unter Verwendung von <a href='https://wordpress.org/' target='_blank'>WordPress</a> und <a href='https://woocommerce.com/' target='_blank' title='Eine e-Commerce-Plattform, die auf WordPress basiert.'>WooCommerce</a>.
						<mark>2</mark> Die nahtlose Integration des <span title='Enterprise Resource Planning (ERP) ist eine Art von Software-System, das Organisationen bei der Automatisierung und Verwaltung ihrer Kerngeschäftsprozesse für optimale Leistung unterstützt.'>ERP-Systems</span>, der hausinternen Ticketsystem und Buchhaltungssystem durch <a href='https://getcomposer.org/' target='_blank' title='Ein Abhängigkeitsmanager für PHP.'>Composer</a>, <a href='https://symfony.com/' target='_blank' title='Ein PHP-Framework für Webprojekte'>Symfony</a>, eine <a href='https://jsonapi.org/' target='_blank'>JSON-API</a> und <span title='EDIFACT ist die Abkürzung für "Electronic Data Interchange for Administration, Commerce and Transport".'>EDIFACT</span> zu orchestrieren.
					</>,
					<>
						Die Hauptherausforderung, der wir gegenüberstanden, bestand darin, ein System zu entwickeln, robust genug, um zwei Schlüsselprobleme zu bewältigen:
						<mark>1</mark> Ein erhebliches Volumen von hochauflösenden Bildern und Videos.
						<mark>2</mark> Einen hohen Zustrom von Interaktionen.<br></br>
						Fühlen Sie sich frei, <a href={Lexicon.utilities.contact}>Kontakt aufzunehmen</a>, wenn Sie wissen möchten, wie wir das Problem gelöst haben &#128520;.
					</>,
					<>
						Es ist erwähnenswert, dass mein Engagement nach dem Start des neuen Online-Shops und kurz vor der Entwicklung eines neuen Newsletter-Konzepts zu Ende gegangen ist.
					</>,
				],
				badges: ['Anforderungsmanagement', 'Kommunikation', 'Koordinierung', 'Architektur', 'API', 'Javascript', 'PHP', 'Symfony', 'EDIFACT', 'WordPress', 'WooCommerce'],
			},
			{
				id: 'sigmasport-sharing',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.sharing,
				timeframe: 'Januar 2021 - Dezember 2021',
				headline: <>SIGMA Sharing <strong>v3</strong></>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Wir haben die Entwicklung einer Webanwendung durchgeführt, die Daten von Fahrradaktivitäten, die von SIGMA-Fahrradcomputern erfasst wurden, auf clevere Weise visualisiert hat, mit Hilfe von <span title="Siehe <a href='https://leafletjs.com/'>Leaflet</a> und <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>.">dynamischen Karten</span> und <span title="Siehe <a href='https://apexcharts.com/'>APEXCHART.JS</a>">aufschlussreichen Grafiken</span>.
					</>,
					<>
						Interessanterweise die <span title='Die erste Version im Jahr 2018.'>Entstehung dieses Projekts</span> ist eigentlich eine Bachelorarbeit gewesen und diente als Machbarkeitsstudie, die ich die Ehre hatte zu betreuen.
					</>,
				],
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.sharing,
					alt: 'Demo',
				},
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.reviews,
				timeframe: '2020',
				headline: 'Bewertungen des Rox 12',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Wir haben eine fesselnde Microsite eingeführt, die entwickelt wurde, um die Reaktionen der globalen Medien auf den damals neu eingeführten ROX 12 SPORT-Fahrradcomputer zu präsentieren... Es handelte sich um ein Marketinginstrument.
					</>,
					<>
						Das Projekt umfasste eine einzige Hauptveröffentlichung, und alle inhaltlichen Aktualisierungen wurden mühelos vom Marketing-Team über einen dedizierten Verwaltungsbereich bearbeitet.
					</>,
					<>
						Eine der herausragenden Funktionen des Projekts war zweifelsohne das unendliche Scroll-Verhalten, das das Benutzererlebnis verbesserte.
					</>,
				],
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.reviews,
					alt: 'Demo',
				},
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.gpx,
				timeframe: '2020',
				headline: 'SIGMA GPX',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: <>
					Wir haben eine dynamische Plattform für die SIGMA SPORT-Community eingeführt. Hier konnten Mitglieder frei ihre Fahrradabenteuer, Erkenntnisse und Strecken teilen. Damit schufen wir einen Raum, in dem Gleichgesinnte ähnliche Erlebnisse und Emotionen genießen konnten.
				</>,
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.gpx,
					alt: 'Demo',
				},
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.aura,
				timeframe: '2019',
				headline: 'Die Aura-Serie',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Wir haben eine überzeugende Microsite entwickelt, um die <span title="Eine Auswahl von SIGMA SPORT-Lampen">Aura-Serie</span> ins Rampenlicht zu rücken. Dieses Marketinginstrument wurde auf Tablets bei zahlreichen Veranstaltungen, Messen und Seminaren während der Fahrradsaison 2019 eingesetzt.
					</>,
					<>
						Ich erinnere mich gerne an die herausragende Funktion des Projekts, die Drag & Drop-Funktionalität. Eine erfreuliche Ergänzung zum Marketing-Arsenal des Unternehmens! &#128513;
					</>
				],
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.aura,
					alt: 'Demo',
				},
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.eox,
				timeframe: '2019',
				headline: <>Die E-Bike EOX<sup>&#174;</sup> Serie</>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Wir haben eine wirkungsvolle Microsite für die Werbung der SIGMA SPORT EOX<sup>&#174;</sup>-Serie erstellt. Dieses Marketinginstrument trat bei zahlreichen Veranstaltungen, Messen und Seminaren während der Fahrradsaisons 2019, 2020 und 2021 in Erscheinung.
					</>,
					<>
						Obwohl die Website bescheiden erscheinen mag, stellte das Projekt eine faszinierende Herausforderung dar. Nämlich der Umgang mit einem erheblichen Volumen hochauflösender Bilder. Neugierig, wie wir dieses Problem angegangen sind? Fühlen Sie sich frei, sich <a href={Lexicon.utilities.contact}>zu melden</a>, und lassen Sie uns in die Lösung eintauchen! &#128520;
					</>,
				],
				links: [
					{
						label: 'Website',
						href: 'https://sigmasport-ebike.com/',
					},
				],
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.eox,
					alt: 'Demo',
				},
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.pagecon,
				timeframe: 'Februar 2019 - Juli 2019',
				headline: 'Infrastrukturmigration',
				subline: <>PageCon GmbH &#128327;&nbsp;</>,
				children: [
					<>
						Am 31. Juli 2019 schloss <em>PageCon GmbH &#128327;&nbsp;</em>, eine etablierte Online-Agentur, die sich auf die Betreuung von mittelständischen Unternehmen spezialisiert hat, ihre Türen zum letzten Mal.
					</>,
					<>
						Die Monate, die diesem bedeutsamen Ereignis vorausgingen, waren für mich von zwei entscheidenden Aktivitäten geprägt:
						<mark>1</mark> Die akribische Dokumentation der Anwendungen vor der Migration.
						<mark>2</mark> Die Koordination des reibungslosen Übergangs mit den neuen Online-Agenturen.
					</>,
				],
				links: [
					{
						label: 'Website',
						href: 'http://pagecon.de/',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.compatibility,
				timeframe: 'August 2018 - Dezember 2018',
				headline: 'SIGMA Kompatibilität',
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						Wir haben eine fesselnde Microsite speziell für die SIGMA SPORT-Community entwickelt.Diese Plattform diente als wertvolle Ressource, die es den Benutzern ermöglichte, die Kompatibilität verschiedener SIGMA SPORT-Geräte, sei es Fahrradcomputer oder Smartwatches, mit gängigen mobilen Geräten wie Smartphones, Tablets oder Laptops zu überprüfen.
					</>,
				],
				diashow: {
					mode: Lexicon.utilities.modes.video,
					src: Lexicon.tapmeppe.diashow.sigmasport.compatibility,
					alt: 'Demo',
				},
			},
			{
				id: 'sigmasport-shop-launch',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.shop,
				timeframe: 'Januar 2018 - Februar 2023',
				headline: <>SIGMA WEBSTORE v1 &#128327;&nbsp;</>,
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						Vorstellung des SIGMA SPORT Online-Shops, Ihrer Anlaufstelle für SIGMA-Ersatzteile. Nach mehreren Jahren als Amazon-Verkäufer sind <span title='Mein Team und meine Wenigkeit.'>wir</span> auf eine aufregende Reise gegangen, um SIGMA's eigenen Online-Shop zu starten. Dieser Shop konzentrierte sich hauptsächlich auf die Bereitstellung von Ersatzteilen für die Geräte des Unternehmens, angefangen bei Batterien und USB-Kabeln bis hin zu elastischen Gurten und mehr. Er war die Anlaufstelle für alle wichtigen Dinge, um die SIGMA SPORT-Ausrüstung in Top-Form zu halten.
					</>,
					<>
						<strong>Dies markierte meinen Einstand in einer leitenden Position in einem Projekt von Anfang an.</strong> Ich hatte die Gelegenheit, das Team anzuleiten, während ich zu erfolgreichen Abschluss des Projekts beitrug.
					</>,
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.wormsyd,
				timeframe: 'Mai 2017 - Dezember 2019',
				headline: <>WOrMSYd &#128327;&nbsp;</>,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						WOrMSYd, kurz für WarehOuse Management SYstem, markierte meinen 2. Versuch, ein robustes Lagerverwaltungssystem speziell für den Afrikanischen Markt umzusetzen.
					</>,
					<>
						Bedauerlicherweise sah sich das Projekt mit mehreren Herausforderungen konfrontiert, darunter auch die unvorhergesehene Auswirkung der COVID-19-Pandemie. Trotz der Rückschläge betrachte ich es jedoch als wertvolle Lernerfahrung, die mich mit dem Wissen und den Einblicken ausgestattet hat, um es in Zukunft noch effektiver anzugehen.
					</>,
					<>
						Und ja, es wird ein 3. Versuch geben... &#128526;
					</>
				],
				links: [],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.bloom,
				timeframe: 'März 2017 - Oktober 2018',
				headline: 'Buchungsfunktionen',
				subline: <>Bloom's</>,
				children: [
					<>
						Im März 2017 habe ich das Projekt "Bloom's-Website" von meinem Vorgänger übernommen. Im Verlauf von März 2017 bis Oktober 2018 habe ich das Ruder übernommen und die Funktionalitäten der Website erheblich erweitert.
					</>,
					<>
						Eine bemerkenswerte Leistung war die Entwicklung der Buchungsfunktionen. Die Website dient als Benutzeroberfläche und interagiert nahtlos mit dem ERP-System des Unternehmens über eine leistungsstarke API.
					</>
				],
				links: [
					{
						label: 'Termine',
						href: 'https://bloom-s.de/termine.html',
					},
					{
						label: 'Gutscheine',
						href: 'https://bloom-s.de/gutscheine.html',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.motec,
				timeframe: 'März 2017 - Januar 2019',
				headline: `MOTEC Wheels, Ultra Wheels, artFORM Wheels`,
				subline: <>AVO Fahrzeugtechnik GmbH & Co. KG</>,
				children: [
					<>
						Im März 2017 übernahm ich die Verantwortung für die MOTEC Wheels, Ultra Wheels und artFORM Wheels Projekte von meinem Vorgänger.Im Zeitraum von März 2017 bis Januar 2019 begann ich mit einer umfassenden Erweiterung der Funktionalitäten der Websites.
					</>,
					<>
						Ein bemerkenswerter Erfolg in dieser Zeit war der Relaunch der Websites unter Verwendung von <a href='https://www.joomla.org/' target='_blank'>Joomla</a> als Framework. Darüber hinaus konnte ich erfolgreich Verbindungen zwischen den Websites und den Datenbanken von TÜV Nord und TÜV Süd herstellen.
					</>,
					<>
						Die größte Herausforderung bei diesem Projekt bestand in der Entwicklung einer anspruchsvollen Datenstruktur, die in der Lage war, Daten von beiden Quellen effektiv zu integrieren.
					</>,
				],
				links: [
					{
						label: `MOTEC Wheels`,
						href: 'https://www.motec-wheels.de/',
					},
					{
						label: 'Ultra Wheels',
						href: 'https://www.ultra-wheels.de/',
					},
				],
			},
		],
	}
	resume = [
		{
			mode: Lexicon.utilities.modes.double,
			left: {
				headline: 'Eine Toolbox voller Fähigkeiten',
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Agile und klassische Arbeitsmethoden 🏛️🔄',
						title: `
							Die Kombination von agilen und klassischen Arbeitsmethoden ähnelt dem Verschmelzen der zeitlosen Stärke klassischer Strukturen 🏛️ mit der dynamischen, sich ständig weiterentwickelnden Anpassungsfähigkeit agiler Ansätze 🔄 und schafft so einen vielseitigen Ansatz für Projektmanagement und Entwicklung.
						`,
					},
					{
						label: 'Anforderungsanalyse 📋',
						title: `
							Die Anforderungsanalyse ist der akribische Prozess der Sammlung, Dokumentation 📋 und des Verstehens der wesentlichen Elemente und Ziele eines Projekts, um eine erfolgreiche Entwicklung und Implementierung zu gewährleisten.
						`,
					},
					{
						label: 'Anpassungsfähigkeit 🧩🌱',
						title: `
							Anpassungsfähigkeit ist die Fähigkeit, sich nahtlos anzupassen und in sich verändernde Projektanforderungen zu integrieren, ganz ähnlich wie ein fehlendes Puzzleteil 🧩, das in verschiedenen Umgebungen wächst 🌱.
						`,
					},
					{
						label: 'Entwicklungszyklus ⚙️⏳',
						title: `
							Der Entwicklungszyklus ist wie die sich drehenden Räder des Fortschritts ⚙️ und markiert den fortlaufenden Prozess der Planung, des Aufbaus, der Prüfung und der Verfeinerung eines Projekts ⏳, um seine kontinuierliche Verbesserung und Entwicklung zu gewährleisten.
						`,
					},
					{
						label: 'Gestaltungsfähigkeiten 💡',
						title: `
							Gestaltungsfähigkeiten sind die Kunst, innovative Ideen und Konzepte 💡 zu erhellen und die grundlegende Vision für erfolgreiche Projekte zu schaffen.
						`,
					},
					{
						label: 'Koordinationsfähigkeit 🚦',
						title: `
							Die Koordinationsfähigkeit ist die Fähigkeit, verschiedene Elemente und Personen nahtlos und kooperativ zusammenzubringen, um einen reibungslosen Ablauf 🚦 und die erfolgreiche Umsetzung von Projekten zu gewährleisten.
						`,
					},
					{
						label: 'Prototyping-Fähigkeiten ⚗️💥',
						title: `
							Prototyping-Fähigkeiten beinhalten das Zusammenfügen der Elemente eines Projekts, das Experimentieren ⚗️ mit verschiedenen Komponenten und Lösungen in einem spannenden Prozess, der Kreativität und Innovation entfacht 💥 und zu einem dynamischen und funktionalen Endergebnis führt.
						`,
					},
					{
						label: 'Selbstorganisation 🧘🏿‍♂️',
						title: `
							Selbstorganisation ist die Kunst, das innere Gleichgewicht 🧘🏿‍♂️ zu bewahren und Aufgaben eigenständig zu managen, um einen harmonischen Arbeitsablauf und eine effiziente Produktivität zu fördern.
						`,
					},
					{
						label: 'Sorgfalt bei der Arbeit 🧐🕒',
						title: `
							Sorgfalt bei der Arbeit ist die Kunst, Aufgaben und Verantwortlichkeiten mit einer akribischen und unerschütterlichen Hingabe 🧐 anzugehen, um sicherzustellen, dass jedes Detail mit Präzision behandelt und ausgeführt wird, auch wenn dies bedeutet, dass die Arbeit etwas länger dauert 🕒.
						`,
					},
					{
						label: 'Teamarbeit 🤝🏿',
						title: `
							Teamarbeit ist die kraftvolle Synergie von Einzelpersonen, die harmonisch zusammenarbeiten 🤝🏿 und ihre vielfältigen Fähigkeiten und Perspektiven nutzen, um gemeinsame Ziele zu erreichen und außergewöhnliche Ergebnisse zu erzielen.
						`,
					},
				],
			},
			right: {
				headline: 'Mein Stack, meine Stärke',
				mode: Lexicon.utilities.modes.bars,
				content: [
					{
						label: 'Java',
						title: "Java, Scala and Maven werden hauptsächlich privat genutzt, um mir das Leben zu vereinfachen. 😂",
						...Lexicon.tapmeppe.resume,
					},
					{
						label: 'PHP, MySQL, Javascript, CSS, HTML',
						title: 'PHP, MySQL, Javascript, CSS, HTML',
						...Lexicon.tapmeppe.resume,
						animated: true,
					},
					{
						label: 'WordPress',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2014,
						},
						rate: {
							value: Utils.year,
						},
					},
					{
						label: 'Joomla, Prestashop',
						title: 'Joomla, Prestashop',
						...Lexicon.tapmeppe.resume,
						offset: {
							value: 2017,
						},
						rate: {
							value: 2022,
						},
					},
					{
						label: 'NodeJS, TypeScript, React.js, Bootstrap',
						title: 'NodeJS, TypeScript, React.js, Bootstrap',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2017,
						},
					},
					{
						label: 'WooCommerce, Symfony',
						title: 'WooCommerce, Symfony',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2019,
						},
						rate: {
							value: Utils.year,
						},
					},
					{
						label: 'VueJS',
						title: 'VueJS',
						...Lexicon.tapmeppe.resume,
						offset: {
							value: 2022,
						},
						rate: {
							value: 2023,
						},
					},
					{
						label: 'Docker, Playwright',
						title: 'Docker, Playwright',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2022,
						},
						rate: {
							value: Utils.year,
						},
					},
				],
			},
		},
		{
			mode: Lexicon.utilities.modes.double,
			left: {
				headline: 'Ein Meer von Worten',
				mode: Lexicon.utilities.modes.list,
				content: [
					{
						label: 'Englisch (Kamerun): Amtssprache',
						title: 'Ich bin in einem englischsprachigen Haushalt aufgewachsen.',
					},
					{
						label: 'Französisch (Kamerun): Amtssprache',
						title: 'Ich habe eine französischsprachige Schule besucht.',
					},
					{
						label: 'Deutsch (Deutschland): Sehr gut im Sprechen und Schreiben.',
						title: `
							Nach dem Abitur bin ich nach Deutschland gezogen, wo ich Informatik studiert und anschließend meine berufliche Laufbahn eingeschlagen habe.
						`,
					},
					{
						label: <>Japanisch (Japan): Anime-Level 😅</>,
						title: `
							Bis jetzt habe ich bestimmt über 10.000 Anime auf Japanisch geschaut. Ab und zu bin ich in der Lage, die Bedeutung einiger Sätze zu erfassen &#128526.
						`,
					},
				],
			},
			right: {
				headline: 'Der Weg zur Expertise',
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Bachelor of Science (B. Sc.) in Informatik.',
					},
					{
						label: 'Master of Science (M. Sc.) in Information Management.',
					},
					{
						label: 'Mehr als 10 Jahre Erfahrung als Webentwickler.',
					},
					{
						label: 'Einschließlich 4 Jahre als Leadentwickler.',
					},
				],
			},
		},
		{
			mode: Lexicon.utilities.modes.single,
			full: {
				headline: 'Berufliche Odyssee',
				mode: Lexicon.utilities.modes.grid,
				content: [
					{
						image: Lexicon.tapmeppe.images.tapmeppe,
						alt: `Logo von ${Lexicon.utilities.config.contact.business}.`,
						timeframe: 'Juli 2023 - heute',
						headline: Lexicon.tapmeppe.resume.faas,
						subline: Lexicon.utilities.config.contact.business,
						children: [
							<>
								Moin moin an die digitalen Entdecker 🙋🏿‍♂️. Ich begebe mich auf eine neue Reise. Begleitet mich auf meiner Reise als freiberuflicher Webentwickler 💼. Von den ersten Schritten in der Webentwicklung bis hin zur Gestaltung von Online-Erlebnissen habe ich diese dynamische Welt 🌐 angenommen. Gemeinsam werden wir die Meilensteine, Herausforderungen und aufregenden Projekte 🚀 erkunden, die meinen Weg definieren. Willkommen im Abenteuer!
							</>,
						]
					},
					{
						image: Lexicon.tapmeppe.images.intera,
						alt: `Logo of Intera GmbH.`,
						timeframe: 'Juli 2023 - August 2023',
						headline: `Technischer Berater`,
						subline: `Intera GmbH`,
						children: [
							<>
								Ich habe eine Rolle bei der Neugestaltung einer Webanwendung gespielt, indem ich eine moderne Architektur entworfen habe. Darüber hinaus habe ich technische Unterstützung durch Aktivitäten wie Codeüberprüfungen und Pair Programming bereitgestellt.
							</>,
						],
						badges: [
							'Anforderungsmanagement',
							'Kommunikation',
							'Webentwicklung',
							...Lexicon.tapmeppe.resume.badges.intera,
						],
					},
					{
						image: Lexicon.tapmeppe.images.sigmasport,
						alt: `Logo von Sigma Elektro GmbH.`,
						timeframe: 'August 2019 - Juli 2023',
						headline: `Lead Entwickler`,
						subline: `Sigma Elektro GmbH`,
						children: [
							<>
								Als technischer Leiter war ich verantwortlich für alle Online-Projekte und gewährleistete einen reibungslosen technischen Betrieb. Ich habe Datenschutzmaßnahmen gemäß den Anforderungen der DSGVO verwaltet und die erfolgreiche Migration von Unternehmensanwendungen von alten zu neuen Serveranbietern überwacht.
							</>,
						],
						badges: [
							'Projektkoordination',
							'Anforderungsmanagement',
							'Team-Mentoring',
							'Teamarbeit',
							'Kommunikation',
							'Webentwicklung',
							...Lexicon.tapmeppe.resume.badges.sigmasport,
						],
					},
					{
						image: Lexicon.tapmeppe.images.pagecon,
						alt: `Logo von PageCon GmbH.`,
						timeframe: 'März 2017 - Juli 2019',
						headline: `Senior Full-Stack Entwickler`,
						subline: <>PageCon GmbH &#128327;&nbsp;</>,
						children: [
							<>
								Ich war aktiv an der Entwicklung und Pflege verschiedener Kundenwebsites beteiligt, einschließlich Startseiten, Microsites und Website-Launches. Darüber hinaus habe ich robuste Datenschutzmaßnahmen zur Einhaltung der DSGVO implementiert. Außerdem habe ich während dieses Kapitels, Anleitung und Betreuung für Auszubildende und Studenten bereitgestellt.
							</>,
						],
						badges: [
							'Anforderungsanalyse',
							'Teamarbeit',
							'Kommunikation',
							'Webentwicklung',
							...Lexicon.tapmeppe.resume.badges.pagecon,
						],
					},
					{
						image: Lexicon.tapmeppe.images.alpha,
						alt: `Logo von alpha-test GmbH.`,
						timeframe: 'Januar 2014 - Februar 2017',
						headline: `Webentwickler`,
						subline: `alpha-test GmbH`,
						children: [
							<>
								Ich habe eine Schlüsselrolle bei der Implementierung von <span title="Ein Online-Bewertungstool zur Verbesserung verschiedener Prozesse.">PIAT<sup>&#174;</sup></span> gespielt, das Hauptprodukt des Unternehmens. Darüber hinaus habe ich zur Entwicklung und Pflege der Unternehmenswebsite beigetragen.
							</>,
						],
						badges: [
							'Anforderungsanalyse',
							'Teamarbeit',
							'Kommunikation',
							'Webentwicklung',
							...Lexicon.tapmeppe.resume.badges.alpha,
						],
					},
					{
						image: Lexicon.tapmeppe.images.celsius37,
						alt: `Logo of celsius37.com AG.`,
						timeframe: 'März 2010 - Oktober 2012',
						headline: `Webentwickler (Werkstudent)`,
						subline: `Celsius37.com AG`,
						children: [
							<>
								Zu meinen Aufgaben gehörte die gewissenhafte Wartung und effektive Fehlerbehebung des <span title='Ein Informationssystem für Radiologie.'>celsius37<sup>&trade;</sup> CancerCenter</span>. Darüber hinaus habe ich aktiv zur Entwicklung innovativer Funktionen und Verbesserungen beigetragen
							</>,
						],
						badges: [
							'Teamarbeit',
							'Kommunikation',
							'Webentwicklung',
							...Lexicon.tapmeppe.resume.badges.celsius,
						],
					},
				],
			},
		},
	]
	services = {
		mode: Lexicon.utilities.modes.grid,
		catalogue: {
			administration: {
				headline: 'Verwaltung',
				list: {
					consulting: {
						headline: 'Beratung und Planung',
						description: 'Bereitstellung von Fachwissen und Ratschlägen zu Webentwicklungsstrategien und Projektplanung.',
					},
					management: {
						headline: 'Projektmanagement',
						description: 'Effiziente Koordination und Überwachung aller Aspekte eines Webentwicklungsprojekts, um sicherzustellen, dass es rechtzeitig und im Budget geliefert wird.',
					},
					requirements: {
						headline: 'Anforderungsanalyse',
						description: "Sorgfältiges Prüfen der Projektanforderungen und -ziele, enge Zusammenarbeit mit dem Kunden zur Festlegung klarer und detaillierter Anforderungen, die als Grundlage für den Erfolg des Webentwicklungsprojekts dienen.",
					},
					conceptualising: {
						headline: 'Konzepterstellung',
						description: 'Ideen und Ziele in kreative und innovative Konzepte umwandeln, dabei sicherstellen, dass jedes Projekt eine starke und einzigartige visuelle und funktionale Identität hat.',
					},
					mentoring: {
						headline: 'Mentoring',
						description: [
							<>
								<span title="Code-Reviews, Pair-Programming-Sitzungen, usw.">Anleitung und Förderung</span> junger Entwickler, Förderung ihres Wachstums und Sicherstellung hochwertiger Code- und Entwicklungspraktiken.
							</>,
						],
					},
					documentation: {
						headline: 'Dokumentation',
						description: 'Erstellen von Dokumentationen für Website-Funktionen, -Funktionalitäten und -Prozesse.',
					},
				},
			},
			implementation: {
				headline: 'Umsetzung',
				list: {
					website: {
						headline: 'Websites',
						description: 'Dies ist der Kernservice, bei dem Websites basierend auf den Anforderungen des Kunden erstellt werden.',
					},
					applications: {
						headline: 'Webanwendungen',
						description: 'Erstellen von einzigartigen und maßgeschneiderten Weblösungen mit dynamischen Funktionen gemäß den Anforderungen des Kunden.',
					},
					responsive: {
						headline: 'Responsive Webdesign',
						description: 'Sicherstellen, dass Websites für verschiedene Bildschirmgrößen und Geräte optimiert sind.',
					},
					fullstack: {
						headline: 'Fullstack-Entwicklung',
						description: `Angebot von Frontend- und Backend-Entwicklungsdiensten zur Erstellung kompletter Weblösungen.`,
					},
					database: {
						headline: 'Datenbanken',
						description: 'Erstellung und Integration von Datenbanken zur Speicherung und Verwaltung von Websitedaten.',
					},
					boilerplates: {
						headline: 'Boilerplates',
						description: [
							<>
								Integration und Anpassung von <span title="Content Management Systems">CMS</span>-Plattformen wie WordPress, Joomla and Frameworks wie <span title="Fun fact: Diese Website verwendet AstroJs als Framework.">AstroJs</span>, NextJs.
							</>
						],
					},
					ecommerce: {
						headline: 'e-Commerce',
						description: 'Erstellung von Online-Shops und Warenkorb-Systemen für den Verkauf von Produkten oder Dienstleistungen.',
					},
					api: {
						headline: 'API-Entwicklung',
						description: [
							<>
								Das Erstellen robuster und effizienter <span title="Application Programming Interfaces">APIs</span> zur Ermöglichung eines nahtlosen Datenaustauschs und zur Integration mit Drittanbieterdiensten, um die Funktionalität und Konnektivität Ihrer Webanwendungen zu verbessern.
							</>
						],
					},
				},
			},
			optimisation: {
				headline: 'Optimierung',
				list: {
					automation: {
						headline: 'Digitalisierung und Automatisierung',
						description: 'Die Digitalisierung und Automatisierung von Geschäftsprozessen beinhalten die Integration von Technologie und die Optimierung von Arbeitsabläufen, um die Effizienz zu steigern, manuelle Eingriffe zu reduzieren und das Unternehmen zu einem technologisch fortschrittlicheren und agileren Betrieb zu bewegen.',
					},
					performance: {
						headline: 'Leistung',
						description: 'Verbesserung der Website-Geschwindigkeit und -Leistung durch verschiedene Techniken.',
					},
					security: {
						headline: 'Sicherheitsmaßnahmen',
						description: 'Sicherstellen, dass Websites sicher sind und SSL-Zertifikate zur Verschlüsselung implementieren.',
					},
					seo: {
						headline: 'SEO',
						description: 'Websites für Suchmaschinen optimieren, um ihre Sichtbarkeit in den Suchergebnissen zu verbessern.',
					},
					analytics: {
						headline: 'Analysen',
						description: 'Einrichten von Tracking- und Analysetools, um den Website-Verkehr und das Nutzerverhalten zu überwachen.',
					},
				},
			},
			delivery: {
				headline: 'Endprodukt',
				list: {
					tests: {
						headline: 'Qualitätssicherung',
						description: 'Durchführen gründlicher Tests, um sicherzustellen, dass Websites fehlerfrei sind und ordnungsgemäß funktionieren.',
					},
					training: {
						headline: 'Schulungen und Workshops',
						description: 'Anbieten von Schulungssitzungen für Kunden zur Nutzung und Aktualisierung ihrer Websites.',
					},
					deployment: {
						headline: 'Bereitstellung',
						description: 'Effizientes und sicheres Starten Ihrer Webanwendungen auf Live-Servern, um einen reibungslosen Übergang von der Entwicklungsumgebung zur Produktionsumgebung für eine nahtlose Benutzererfahrung sicherzustellen.',
					},
					relocation: {
						headline: 'Umzug',
						description: 'Sicher und reibungslos Ihre Website oder Webanwendung von einer Hosting-Umgebung in eine andere übertragen, um Ausfallzeiten zu minimieren und die Integrität der Daten während des Umzugsprozesses sicherzustellen.',
					},
				},
			},
			miscellaneous: {
				headline: 'Verschiedenes',
				list: {
					miscellaneous: {
						headline: 'Verschiedenes',
						description: [
							<>
								Haben Sie nicht gefunden, wonach Sie gesucht haben? Keine Sorge!<br></br>
								Wenn es mit dem Web zusammenhängt, stehe ich Ihnen gerne zur Verfügung oder kann zumindest einige Ratschläge geben. Zögern Sie nicht, sich bei mir zu melden. Ich würde mich freuen, von Ihrer Vision zu hören.
							</>
						],
					},
				},
			},
			// maintenance: {},
		},
		pricing: {
			headline: 'Preisstrategien',
			strategies: {
				africa: {
					// illustration: '',
					headline: 'Finales Angebot',
					header: <>
						<span class='fs-3'>60.000</span>
						<span class='fs-5'>&nbsp;FCFA/Monat</span>
					</>,
					items: [
						<em>Sie befinden sich in der Subsahara-Region</em>,
						`Analyse und Beratung`,
						`Strategie und Planung`,
						`Projektleitung`,
						<>Ich setze das Projekt um, <br></br><span class="text-nowrap">Sie mieten</span></>,
						<em>Wartung: <span class="text-nowrap">30 Min/Monat</span></em>,
						<>Meeting zur Abstimmung: <span class="text-nowrap">60 Min/Monat</span></>,
						`Remote work`,
						// Lexicon0.utilities.abcd.keywords.ellipsis.value,
					],
				},
				project: {
					// illustration: '',
					highlight: 'Am Meisten verwendet',
					headline: 'Kleines Budget',
					header: <span class='fs-3'>200 €/Monat</span>,
					items: [
						<em>Sie sind auf der Nordhalbkugel tätig</em>,
						`Analyse und Beratung`,
						`Strategie und Planung`,
						`Projektleitung`,
						<>Ich setze das Projekt um, <br></br><span class="text-nowrap">Sie mieten</span></>,
						<em>Wartung: <span class="text-nowrap">90 Min/Monat</span></em>,
						<>Meeting zur Abstimmung: <span class="text-nowrap">60 Min/Monat</span></>,
						`Remote work`,
						// Lexicon0.utilities.abcd.keywords.ellipsis.value,
					],
				},
				business: {
					// illustration: '',
					headline: 'Unternehmen',
					header: <span class='fs-4 pb-1 d-block'>Lassen Sie uns reden</span>,
					items: [
						<strong>Sie möchten Vision und Produkt besitzen</strong>,
						`Analyse und Beratung`,
						`Strategie und Planung`,
						`Projektleitung`,
						<strong>Ich setze das Projekt um, <br></br><span class="text-nowrap">Sie kaufen</span></strong>,
						<strong>Wartung und Support</strong>,
						<strong>Meeting zur Abstimmung nach Bedarf</strong>,
						`Remote work`,
						<strong>Vor-Ort-Einsätze bei Bedard</strong>,
					],
				},
			},
		},
		miscellaneous: {
			more: 'Mich kontaktieren',
			message: (service: string) => ({
				subject: `Anfrage über "${service}"`,
				body: `Hallo. Ich interessiere mich für folgende Dienstleistung: "${service}".`,
			}),
		}
	}

	constructor() {
		super('de', 'Deutsch')
	}
}
