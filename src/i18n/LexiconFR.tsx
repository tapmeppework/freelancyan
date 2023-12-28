import type { Snippet } from '@framework'
import Lexicon0 from './LexiconABCD'

export default class Lexicon<Miscellaneous = any> extends Lexicon0<Miscellaneous> {
	private static readonly zyxw = {
		index: {
			description: `
				Bienvenue chez ${Lexicon.utilities.config.contact.business} 👋🏿.\n
				Je m'appelle ${Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ et je suis un développeur web expérimenté 🤘🏿.
			`,
		},
		pages: {
			services: {
				href: 'services',
				headline: 'Services',
				description: `
					Découvrez mes services complets de développement web en tant que développeur web indépendant, comprenant la gestion de projet, l'analyse des besoins, le développement et bien plus encore. Associez-vous à moi pour un parcours en ligne fluide.
				`,
				preamble: `
					En tant que développeur web indépendant, je suis votre partenaire dévoué pour la création de solutions web exceptionnelles. Explorez une gamme de services experts conçus pour rehausser votre présence en ligne et donner vie à vos visions numériques. De la gestion de projet au développement, je suis là pour transformer vos idées en réalité. Découvrez davantage sur mes offres ci-dessous et embarquez avec moi dans une passionnante aventure d'excellence en développement web.
				`,
			},
			portfolio: {
				href: 'portfolio',
				headline: 'Portfolio',
				description: `
					Explorez une vitrine de mes projets de développement web en tant que développeur web. Plongez dans une collection de sites web et d'applications web qui reflètent mon expertise dans la création d'expériences en ligne attrayantes, fonctionnelles et visuellement attrayantes.
				`,
				preamble: `
					Bienvenue dans mon portfolio! Ici, je présente fièrement une sélection soigneusement choisie de mes projets de développement web, chacun représentant le fruit de mon dévouement, de ma créativité et de mes compétences techniques en tant que développeur web. Parcourez ces exemples pour découvrir de première main la diversité de sites web et d'applications web que j'ai eu le privilège de faire naître. Que vous recherchiez de l'inspiration ou que vous souhaitiez collaborer avec moi, ce portfolio témoigne de mon engagement à fournir des solutions en ligne exceptionnelles.
				`,
			},
		},
	}

	_404 = {
		action: `Page d'accueil`,
	}
	abcd = {
		harmony: {
			error: `Une erreur s'est produite. Veuillez <a href='${Lexicon.utilities.contact}'>contacter l'administrateur</a>.`,
			more: 'Lire la suite',
			less: 'Lire moins',
			others: 'Autres',
			processing: 'En cours ...',
			diashow: 'Diashow',
		},
		navigation: {
			header: {
				logo: Lexicon.tapmeppe.logo('Le logo de mon entreprise en freelance.'),
				aria: 'Navigation en-tête mobile.'
			},
			footer: {
				copyright: (copy: Snippet, year: number) => <>Copyright {copy} {year} {Lexicon.utilities.config.contact.business}</>
			},
			carousel: {
				previous: 'Diapositive précédente',
				next: 'Diapositive suivante',
				slide: 'Diapositive',
			},
			modal: {
				close: 'Fermer',
				languages: {
					headline: 'Détection de la langue',
					body: `Le site Web est actuellement présenté en '${this.label}'. Souhaitez-vous plutôt passer à l’une des langues suivantes?`,
				},
				third: {
					party: {
						headline: `J'apprécie votre vie privée`,
						body: <>J'utilise des cookies 🍪 pour améliorer votre expérience de navigation et analyser le trafic. En cliquant sur 'Accepter', vous consentez à l'utilisation de cookies tiers.</>,
						accept: 'Accepter',
					},
				},
			},
			schemes: {
				auto: 'Auto',
				dark: 'Sombre',
				light: 'Éclairé',
			},
			scroll: {
				top: 'Faites défiler vers le haut.',
			},
		},
		networks: {
			linkedin: { href: 'https://www.linkedin.com/company/tapmeppe-work' },
			github: { href: Lexicon.tapmeppe.networks.github },
			youtube: {
				href: '',
				title: 'Bientôt disponible!',
			},
		},
		pages: {
			header: {
				index: {
					href: 'index',
					headline: 'Accueil',
					...Lexicon.zyxw.index,
					preamble: <>Je m'appelle {Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ et je suis un développeur web expérimenté 🤘🏿.</>,
				},
				...Lexicon.zyxw.pages,
				resume: {
					href: 'resume',
					headline: 'Curriculum vitae',
					description: `
						Découvrez mon parcours professionnel en tant que développeur web à travers mon curriculum vitae. Explorez les compétences, les expériences et les qualifications qui font de moi un choix fiable et compétent pour les projets de développement web.
					`,
					preamble: `
						Bienvenue sur ma page de curriculum vitae! Ici, je vous offre un aperçu de ma carrière en tant que développeur web. J'ai compilé mes compétences, mes expériences et mes qualifications pour vous donner une vue d'ensemble de ce que j'apporte. Que vous souhaitiez collaborer sur un projet ou simplement en savoir plus sur mon parcours, ce curriculum vitae est une ressource précieuse pour comprendre mon parcours professionnel dans le développement web.
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
					headline: 'Contact',
					description: `
						Connectez-vous avec moi pour découvrir la vie quotidienne passionnante et humoristique d'un polymathe polyvalent, qui jongle avec les aventures propulsées par des fusées 🚀, l'éducation d'un enfant en bas âge précoce 👶 et la programmation informatique tard dans la nuit 💻.
					`,
					preamble: <>
						Lorsque je ne suis pas en train de conquérir les sommets perfides de l'Himalaya dans ma voiture de course propulsée par des fusées 🚀, tout en déchiffrant en solitaire l'énigme de la fusion à froid pour remporter le tant convoité prix Nodel, je suis de retour à la maison à 3 heures ⏰ du matin, engagé dans la noble tâche d'expliquer des concepts sociaux complexes à mon bambin précoce 👶. Après une petite mais efficace diplomatie basée sur la corruption, je parviens avec succès à convaincre mon petit que 3 heures du matin sont bel et bien l'heure du dodo.<br></br>
						Mais pensez-vous que je m'endors ensuite dans le pays des rêves? Bien sûr que non 😄! Je suis immédiatement de retour devant mon ordinateur, car il s'avère que le sommeil est surestimé pour un polymathe polyvalent comme moi 😎.<br></br>
						Si vous êtes curieux de connaître la suite de cette histoire palpitante, n'hésitez pas à me contacter pour découvrir l'épopée grandiose qu'est ma vie quotidienne 😉!
					</>,
				},
				legal: {
					href: 'legal',
					headline: 'Mention légale',
					description: `Découvrez notre page des mentions légales pour des informations sur l'identité légale derrière notre plateforme. Apprenez-en plus sur les détails de notre entreprise, nos coordonnées et nos obligations légales. La transparence et la confiance sont au cœur de notre engagement envers vous.`,
				},
				privacy: {
					href: 'privacy',
					headline: '', //'Privacy policy',
					description: ``,
				},
			},
			phantom: {
				_404: {
					headline: 'Page non trouvée.',
					...Lexicon.zyxw.index,
					preamble: <>
						Oops 😅! Vous vous êtes aventuré dans la jungle numérique et il semble que vous ayez pris un mauvais tournant 🗺️. Ne vous inquiétez pas, je suis sur l'affaire pour vous sortir de ce labyrinthe cybernétique 🦸🏿‍♂️! En attendant, n'hésitez pas à <a href={Lexicon.utilities.portfolio}>explorer certaines de mes merveilles numériques</a> 🚀🌟. Si vous avez besoin d'une assistance immédiate, <a href={Lexicon.utilities.contact}>contactez l'administrateur</a> 📞👨🏿‍💻. D'ici là, profitez de ce petit détour à travers le cosmos virtuel 🌌🌠!
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
			subject: 'Bonjour et bonsoir.',
			body: `Salut! J'aimerais connaître la suite de l'histoire. 😅`,
		},
		me: Lexicon.tapmeppe.contact.me,
		networks: 'Suivez-moi',
		office: {
			headline: `Horaires d'ouverture`,
			content: <>Veuillez prendre rendez-vous.</>
		},
		location: {
			headline: 'Veni, vidi, vici',
			zoom: Lexicon.tapmeppe.contact.zoom,
			error: `L'adresse n'a pas pu etre trouvée.`,
			title: `C'est ici que se déroule le spectacle.`,
			// coordinates: Lexicon.tapmeppe.contact.coordinates,
		},
	}
	index = {
		about: {
			headline: Lexicon.tapmeppe.contact.me,
			body: <>
				Je me spécialise dans la <strong>création de solutions en ligne sur mesure</strong> qui aident les individus et les petites et moyennes entreprises à prospérer à l'ère du numérique. Que vous souhaitiez établir votre présence en ligne, moderniser votre site web existant ou développer une application web sur mesure; mon objectif est de concrétiser votre vision.<br></br>
				Mon aventure professionnelle dans le développement web a débuté aux alentours de {Lexicon.tapmeppe.resume.min.value} et j'ai personnellement été témoin du pouvoir transformateur du paysage numérique.<br></br>
				Travaillons ensemble pour donner vie à votre marque unique sur le web.
			</>,
			contact: `Contactez-nous 📧.<br/>Discutons 💬!`,
		},
		preamble: {
			badge: <>Magie numérique depuis {Lexicon.tapmeppe.resume.min.value}</>,
			body: [
				'Développeur web indépendant',
				'Création de solutions web',
				`Transformation d'idées en solutions digitales`,
				'En bref...',
			],
			headline: 'Votre partenaire de solutions en ligne',
			pages: Lexicon.zyxw.pages,
		},
		profile: Lexicon.tapmeppe.profile(`L'image de profil.`),
	}
	legal = [
		[
			{
				headline: {
					primary: 'Conformément au § 5 TMG',
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
					primary: 'Contact',
				},
				paragraphs: [
					<>
						E-Mail: {Lexicon.utilities.config.contact.email}<br></br>
					</>
				],
			},
			// {
			// 	headline: {
			// 		primary: "Numéro d'identification fiscale",
			// 	},
			// 	paragraphs: [
			// 		<>
			// 			Numéro d'identification de taxe sur les ventes conformément au § 27 a de la "Umsatzsteuergesetz": <strong>{Lexicon.tapmeppe.legal.tax}</strong>.
			// 		</>
			// 	],
			// },
		],
	]
	privacy = []
	portfolio = {
		headline: 'Découvrez mes projets innovants',
		mode: Lexicon.utilities.modes.timeline,
		content: [
			{
				// @see https://de.indeed.com/viewjob?hl=de&jk=e2610f3603419f46&tk=1hijt6qj8pbqg800
				image: Lexicon.tapmeppe.images.portfolio.bergemann,
				alt: 'Bergemann & Höhne GbR logo',
				timeframe: 'Novembre 2023 - Février 2024',
				headline: `Professeur en Frontend (Formation en IT)`,
				subline: 'Bergemann & Höhne GbR',
				children: [
					<>
						Mise en œuvre technique de l'enseignement de la formation continue: Mise en œuvre du programme, élaboration des plans hebdomadaires et des heures de cours, encadrement du groupe de 10 personnes, ainsi que soutien individuel aux élèves en format individuel (assistance liée au contenu pour les problématiques respectives).
					</>,
					<>
						Pour les problèmes personnels des participants, nous sommes soutenus par une éducatrice sociale (par exemple, pendant détermination du rythme d'apprentissage individuel).
					</>,
					<>
						Amélioration et co-conception des contenus de formation et des processus dans toute l'équipe.
					</>,
				],
				badges: ['Git', 'Mockups', 'HTML', 'CSS', 'Sass', 'Tailwind', 'JavaScript', 'React', 'SCRUM',],
				links: [
					{
						label: 'Website',
						href: `https://bergemann-hoehne.com/`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.freelancyan,
				alt: 't@pm3pp3 w0rk logo in gray.',
				timeframe: 'August 2023 - today',
				headline: `Freelancyan`,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						Un framework open source 🌐 qui permet aux individus et aux petites entreprises de créer des sites web de base 🚀. Il est construit sur les fondations 💻 d'<a href='https://astro.build/' target='_blank'>Astro JS</a>, <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a>, <a href='https://lesscss.org/' target='_blank'>Less CSS</a>, <a href='https://www.solidjs.com/' target='_blank'>Solid JS</a>, <a href='https://www.typescriptlang.org/' target='_blank'>TypeScript</a> et <a href='https://webpack.js.org/' target='_blank'>webpack</a>. Il ouvre la voie à vos projets numériques 📲.
					</>,
					<>
						Ce site Web est alimenté par ce propre framework.
					</>,
				],
				badges: ['Astro JS', 'Bootstrap', 'Chat GPT', 'Less CSS', 'Node JS', 'Solid JS', 'TypeScript', 'webpack',],
				links: [
					{
						label: 'Code source',
						href: `${Lexicon.tapmeppe.networks.github}/freelancyan`,
						title: 'Bientôt disponible! Le travail est actuellement en phase bêta.',
					},
					// {
					// 	label: 'Demos',
					// 	href: `--YouTube--`,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.logo,
				alt: `Logo complet de SIGMA-ELEKTRO GmbH.`,
				timeframe: 'Mars 2023 - Juin 2023',
				headline: `Migration d'infrastructure`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Dans mon rôle le plus récent chez <em>SIGMA SPORT</em>, ma principale responsabilité était de faciliter le transfert de connaissances en douceur à mon successeur. De plus, j'ai dirigé la migration de l'infrastructure web de l'entreprise depuis l'ancien fournisseur de serveurs vers un nouveau, le tout dans le même délai.
					</>,
					<>
						Tout au long du projet, nos efforts ont été consacrés aux tâches clés suivantes :
						<mark>1</mark> Évaluation, identification et priorisation des différentes <span title="Avant la migration, l'entreprise exploitait plus de <strong>150</strong> domaines et sous-domaines">applications de l'entreprise admissibles à la migration</span >.
						<mark>2</mark> Coordination du processus de migration avec les responsables de produits, le conseil d'administration et les collègues qui utilisaient ces applications quotidiennement.
						<mark>3</mark> Documentation approfondie de chaque application avant la migration.
						<mark>4</mark> Exécution de la migration, y compris des mises à jour occasionnelles, des tests rigoureux et L'amélioration nécessaire des applications.
						<mark>5</mark> Le point culminant de notre travail a consisté à lancer avec succès les applications dans le nouvel environnement.
					</>,
				]
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.newsletter,
				alt: "Une capture d'écran du formulaire de bêta-testeur.",
				timeframe: 'Octobre 2022 - Avril 2023',
				headline: 'Framework de formulaire de newsletter',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						En 2022, nous avons développé un framework léger pour les formulaires de newsletter. Cette solution innovante a été progressivement mise en œuvre dans tous les formulaires de newsletter de SIGMA SPORT. Un processus qui s'est déroulé sur environ 7 mois.
					</>,
					<>
						Les principales fonctionnalités comprennent:
						<mark>1</mark> Une interface conviviale qui peut être assemblée de manière flexible.
						<mark>2</mark> Un <span title="Un serveur agissant en tant que proxy inverse.">serveur</span> de traitement des données responsable de la réception, de la validation et de la transmission des données vers le centre de newsletters.
						<mark>3</mark> Enfin, un centre de newsletters accessible via une <span title="API est l' acronyme de Application Programming Interface. Un intermédiaire logiciel permettant à deux applications de communiquer entre elles.">API</span >.
					</>,
				],
				badges: ['API', 'Bootstrap', 'CSS', 'HTML', 'Javascript', 'PHP',],
				links: [
					{
						label: 'Bêta-testeur',
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
				alt: "Une capture d'écran de la page d'accueil.",
				timeframe: 'Septembre 2022 - Décembre 2022',
				headline: `VDO cyclecomputing (Relance site web)`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Le <a href='#sigmasport-website-relaunch'>relancement du site web de SIGMA SPORT</a> a entraîné un sous-produit intéressant: un thème <span title="<a href='https://wordpress.org/'>WordPress</a> est un système de gestion de contenu web.">WordPress</span> stable et réutilisable. Nous avons dupliqué ce thème et l'avons adapté pour correspondre parfaitement à la conception globale de la <span title='VDO cyclecomputing'>deuxième marque</span> de l'entreprise.
					</>,
					<>
						Cependant, notre défi le plus important tout au long de ce processus a été de surmonter les complexités de la gestion de l'information et de créer une stratégie de contenu efficace.
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://vdocyclecomputer.com/',
					},
				],
			},
			{
				id: 'sigmasport-website-relaunch',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.website,
				timeframe: 'Janvier 2021 - Février 2023',
				headline: 'SIGMA SPORT (Relance site web)',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Le produit le plus remarquable de la campagne d'automatisation de SIGMA SPORT a été le lancement de son site web. Le nouveau site web était basé sur <a href="https://wordpress.org/" target="_blank">WordPress</a> et <a href='https://woocommerce.com/' target='_blank' title='Une plateforme de commerce électronique basée sur WordPress.'>WooCommerce</a>. Il combinait les <span title="Entre autres de l'ancien site web.">fonctionnalités</span> marketing et commerciales, le nouveau blog en ligne ainsi que la nouvelle boutique en ligne sur un site web bien conçu.
					</>,
					<>
						Plus d'informations peuvent être trouvées dans la section <a href="#sigmasport-automation-main-processes">Automatisation des processus principaux</a>.
					</>,
				],
				badges: ['Analyse des exigences', 'Communication', 'Coordination', 'Conception', 'Javascript', 'PHP', 'WordPress', 'WooCommerce'],
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
				timeframe: 'Janvier 2021 - Février 2023',
				headline: 'Automatisation des processus principaux.',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Suite au lancement réussi et à la maintenance continue de son premier <a href='#sigmasport-shop-launch'>magasin en ligne</a>, SIGMA SPORT a franchi une étape significative en alignement avec la vision de l'entreprise pour la décennie 2020 - 2030. L'entreprise a décidé de créer des liens étroits entre son site web principal, son blog en ligne, sa boutique en ligne, son système ERP, son système de tickets, son système de comptabilité et ses outils de newsletter. Cette démarche stratégique visait à automatiser les processus principaux d'entreprise et améliorer l'expérience globale des utilisateurs, au bénéfice à la fois des clients appréciés et des employés.
					</>,
					<>
						En tant que développeur principal chez SIGMA SPORT, j'ai eu le privilège d'assumer les principales responsabilités suivantes:
						<mark>1</mark> Mener le développement du nouveau site web, du blog en ligne et de la boutique en ligne en utilisant <a href='https://wordpress.org/' target='_blank'>WordPress</a> et <a href='https://woocommerce.com/' target='_blank' title='Une plateforme de commerce électronique basée sur WordPress.'>WooCommerce</a>.
						<mark>2</mark> Orchestrer l'intégration transparente du <span title="Enterprise Resource Planning (ERP) est un type de logiciel qui aide les organisations à automatiser et à gérer les processus d'affaires essentiels pour des performances optimales.">système ERP</span>, des systèmes internes de tickets et de comptabilité grâce à <a href='https://getcomposer.org/' target='_blank' title='Un gestionnaire de dépendances pour PHP.'>Composer</a>, <a href='https://symfony.com/' target='_blank' title='Un framework PHP pour les projets web'>Symfony</a> une <a href='https://jsonapi.org/' target='_blank'>API JSON</a> et <span title="EDIFACT est l'abréviation de &quot;Electronic Data Interchange for Administration, Commerce and Transport&quot;.">EDIFACT</span>.
					</>,
					<>
						Le défi principal auquel nous avons été confrontés était de construire un système suffisamment robuste pour gérer deux problèmes clés.
						<mark>1</mark> Un volume substantiel d'images et de vidéos haute définition.
						<mark>2</mark> Un afflux élevé d'interactions.<br></br>
						N'hésitez pas à <a href={Lexicon.utilities.contact}>nous contacter</a> si vous souhaitez savoir comment nous avons résolu le problème &#128520;.
					</>,
					<>
						Il est à noter que mon implication s'est achevée juste avant le lancement de la nouvelle boutique en ligne et le développement d'un nouveau concept de newsletter.
					</>,
				],
				badges: ['Gestion des exigences', 'Communication', 'Coordination', 'Architecture', 'API', 'Javascript', 'PHP', 'Symfony', 'EDIFACT', 'WordPress', 'WooCommerce'],
				links: [
					{
						label: 'Design actuel',
						href: 'https://sigmasport.com/',
					},
					{
						label: 'Ancien design',
						href: `https://more.sigmasport.com/${this.language}/produkte`,
						title: "L'ancienne page d'accueil est désormais utilisée comme archive, dépourvue de toutes les fonctionnalités complexes.",
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.sharing,
				timeframe: 'Janvier 2021 - Décembre 2021',
				headline: <>SIGMA Sharing <strong>v3</strong></>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Nous avons entrepris le développement d'une application web qui visualisait ingénieusement les données des activités à vélo capturées par les ordinateurs de vélo SIGMA, les présentant à travers <span title="Voir <a href='https://leafletjs.com/'>Leaflet</a> et <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>.">des cartes dynamiques</span> et <span title="Voir <a href='https://apexcharts.com/'>APEXCHART.JS</a>.">des graphiques perspicaces</span>.
					</>,
					<>
						Anecdote amusante, l'<span title='La genèse de ce projet en 2018.'>inception de ce projet</span> était en réalité une thèse de bachelor, servant d'étude de faisabilité que j'ai eu l'honneur de superviser.
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://sigma-sharing.com/',
						title: "Il n'y a pas grand-chose à voir à moins d'avoir le bon jeton. <strong>La démo sera bientôt disponible.</strong>",
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.disabled,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.reviews,
				timeframe: '2020',
				headline: 'Avis sur le Rox 12',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Nous avons introduit un micro-site captivant conçu pour mettre en valeur la réaction des médias mondiaux au lancement du tout nouveau ROX 12 SPORT, un ordinateur de vélo... Il s'agissait d'un instrument marketing.
					</>,
					<>
						Le projet comprenait une seule version majeure, et toutes les mises à jour liées au contenu étaient gérées sans effort par l'équipe marketing via une zone d'administration dédiée.
					</>,
					<>
						L'une des fonctionnalités les plus remarquables du projet était sans aucun doute le comportement de défilement infini, améliorant l'expérience utilisateur.
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://sigmasport-review.com/',
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.todo,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.gpx,
				timeframe: '2020',
				headline: 'SIGMA GPX',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: <>
					Nous avons introduit une plateforme dynamique pour la communauté de SIGMA SPORT. Ici, les membres pouvaient librement partager leurs aventures à vélo, leurs idées et leurs parcours. Créant ainsi un espace où les passionnés pouvaient savourer des expériences et des émotions similaires.
				</>,
				links: [
					{
						label: 'Site Web',
						href: 'https://sigmasport-gpx.com/',
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.todo,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.aura,
				timeframe: '2019',
				headline: 'La série Aura',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Nous avons développé une micro-site captivante pour mettre en lumière la <span title="Une gamme de lampes SIGMA SPORT">série Aura</span>. Cet outil marketing a été déployé sur des tablettes lors de nombreux événements, salons et séminaires tout au long de la saison cycliste 2019.
					</>,
					<>
						Je me souviens avec affection de la fonctionnalité phare du projet, la fonction de Drag & Drop. Un ajout bienvenu à l'arsenal marketing de l'entreprise! &#128513;
					</>
				],
				links: [
					{
						label: 'Site Web',
						href: `https://aura.sigma-lighting.com`,
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.todo,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.eox,
				timeframe: '2019',
				headline: <>La série E-Bike EOX<sup>&#174;</sup></>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Nous avons créé un micro-site percutant dédié à la promotion de la série SIGMA SPORT EOX<sup>&#174;</sup>. Cet outil marketing a fait des apparitions lors des nombreuses évenements, salons et séminaires au cours des saisons de cyclisme 2019, 2020 et 2021
					</>,
					<>
						Alors que le site web peut sembler modeste, le projet présentait un défi intrigant. À savoir la gestion d'un volume substantiel d'images haute définition. Curieux de savoir comment nous avons abordé ce problème? N'hésitez pas à <a href='./contact'>nous contacter</a> et plongeons dans la solution! &#128520;
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://sigmasport-ebike.com/',
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.todo,
					// },
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.pagecon,
				timeframe: 'Février 2019 - Juillet 2019',
				headline: "Migration de l'infrastructure",
				subline: <>PageCon GmbH &#128327;&nbsp;</>,
				children: [
					<>
						Le 31 juillet 2019, <em>PageCon GmbH &#128327;&nbsp;</em>, une agence Web bien établie, spécialisée dans la gestion des entreprises de taille moyenne, a fermé ses portes pour la dernière fois.
					</>,
					<>
						Les mois précédant cet événement significatif ont été marqués pour moi par deux activités cruciales :
						<mark>1</mark> La documentation méticuleuse des applications avant la migration.
						<mark>2</mark> La coordination de la transition en douceur avec les nouvelles agences Web.
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'http://pagecon.de/',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.compatibility,
				timeframe: 'Août 2018 - Décembre 2018',
				headline: 'SIGMA compatibilité',
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						Nous avons développé un micro-site captivant pour à la communauté de SIGMA SPORT.Cette plateforme a servi de ressource précieuse, permettant aux utilisateurs de vérifier la compatibilité de divers appareils SIGMA SPORT, qu'il s'agisse d'ordinateurs de vélo ou de montres intelligentes, avec des appareils mobiles courants tels que des smartphones, des tablettes ou des ordinateurs portables.
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://sigma-compatibility.com/',
					},
					// {
					// 	label: 'Demo: coming soon',
					// 	href: '#',
					// 	class: Lexicon.utilities.classes.abcd.todo,
					// },
				],
			},
			{
				id: 'sigmasport-shop-launch',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.shop,
				timeframe: 'Janvier 2018 - Février 2023',
				headline: 'SIGMA SPORT WEBSTORE',
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						Présentation de la boutique en ligne SIGMA SPORT, votre destination unique pour les pièces de rechange SIGMA. Après plusieurs années en tant que vendeur Amazon, <span title='Mon équipe et moi.'>nous</span> avons entrepris un voyage passionnant pour lancer la propre boutique en ligne de SIGMA. Cette boutique se concentrait principalement sur la fourniture de pièces de rechange pour les appareils de l'entreprise, allant des batteries et des câbles USB aux sangles élastiques et plus encore. C'était la source incontournable pour tous les éléments essentiels permettant de maintenir l'équipement SIGMA SPORT en parfait état.
					</>,
					<>
						<strong>Cela a marqué mes débuts dans un rôle de gestionnaire dans un projet depuis son lancement.</strong> J'ai eu l'opportunité de guider l'équipe tout en contribuant à la réussite du projet.
					</>,
				],
				links: [
					{
						label: 'Boutique en ligne',
						href: `https://sigmasport-shop.com/${this.language}/`,
					},
					{
						label: 'Boutique en ligne: ROX 12.1 EVO',
						href: `https://sigmasport-shop.com/${this.language}/196-rox-121-evo`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.wormsyd,
				timeframe: 'Mai 2017 - Décembre 2019',
				headline: <>WOrMSYd &#128327;&nbsp;</>,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						WOrMSYd, abrégé de WarehOuse Management SYstem, a marqué ma 2<sup>ème</sup> tentative de lancer un solide système de gestion d'entrepôt adapté au marché Africain.
					</>,
					<>
						Malheureusement, le projet a été confronté à plusieurs défis, y compris l'impact imprévu de la pandémie de COVID-19. Cependant, malgré les revers, je le considère comme une précieuse expérience d'apprentissage, m'apportant les connaissances et les idées nécessaires pour l'aborder encore plus efficacement à l'avenir.
					</>,
					<>
						Et oui, il y aura une 3<sup>ème</sup> tentative... &#128526;
					</>
				],
				links: [],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.bloom,
				timeframe: 'Mars 2017 - Octobre 2018',
				headline: 'Fonctionnalités de réservation',
				subline: <>Bloom's</>,
				children: [
					<>
						En mars 2017, j'ai hérité du projet "site Web de Bloom's" de mon prédécesseur. De mars 2017 à octobre 2018, j'ai pris les rênes et considérablement étendu les fonctionnalités du site.
					</>,
					<>
						Une réalisation notable a été le développement des fonctionnalités de réservation. Le site Web sert d'interface utilisateur, interagissant de manière transparente avec le système ERP de l'entreprise via une API robuste.
					</>
				],
				links: [
					{
						label: 'Reservation',
						href: 'https://bloom-s.de/termine.html',
					},
					{
						label: 'Coupons',
						href: 'https://bloom-s.de/gutscheine.html',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.motec,
				timeframe: 'Mars 2017 - Janvier 2019',
				headline: `MOTEC Wheels, Ultra Wheels, artFORM Wheels`,
				subline: <>AVO Fahrzeugtechnik GmbH & Co. KG</>,
				children: [
					<>
						En mars 2017, j'ai assumé la responsabilité des projets MOTEC Wheels, Ultra Wheels et artFORM Wheels, en remplacement de mon prédécesseur. De mars 2017 à janvier 2019, j'ai entrepris une importante amélioration des fonctionnalités des sites web.
					</>,
					<>
						Une réalisation notable au cours de cette période a été le relancement des sites web, en utilisant <a href='https://www.joomla.org/' target='_blank'>Joomla</a> comme framework. De plus, j'ai réussi à établir avec succès des connexions entre les sites web et les bases de données de TÜV Nord et TÜV Süd.
					</>,
					<>
						Le défi le plus important dans ce projet était le développement d'une structure complexe de données capable d'intégrer efficacement les données des deux sources.
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
			{
				image: Lexicon.tapmeppe.images.portfolio.alpha,
				timeframe: 'Janvier 2014 - Février 2017',
				headline: <>PIAT<sup>&#174;</sup></>,
				subline: <>alpha-test GmbH</>,
				children: [ //@see https://www.alpha-test.com/en/solutions/tools/piat
					<>
						PIAT<sup>&#174;</sup> signifie Professional Internet Assessment Tool. Il est utilisé pour la mise en œuvre opérationnelle de la gestion des tests. Dans PIAT<sup>&#174;</sup>, les comptes peuvent être créés (ou importés) et gérés, l'état des tests peut être consulté, et les résultats peuvent être examinés et exportés.
					</>,
					<>
						J'ai commencé mon parcours sur ce projet en tant que développeur junior, en évoluant graduellement et prenant progressivement plus de responsabilités. Avec le temps, j'ai accédé au poste de développeur senior, contribuant de manière significative au succès du projet.
					</>,
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.celsius37,
				timeframe: `Mars ${Lexicon.tapmeppe.resume.min.value} - Octobre 2012`,
				headline: <>celsius37<sup>&trade;</sup> CancerCenter</>,
				subline: 'celsius37.com AG',
				children: [ //@see https://www.celsius37.com/eng/cancercenter/
					<>
						Le celsius37<sup>&trade;</sup> CancerCenter propose aux médecins une solution pour la documentation interdisciplinaire des patients atteints de cancer de tous types. celsius37<sup>&trade;</sup> développe des solutions basées sur le web pour les systèmes de santé intégrés, adaptées aux besoins spécifiques du client.
					</>,
					<>
						J'ai joué un rôle dans le développement de la solution, d'abord en tant que stagiaire, puis en tant qu'étudiant en alternance tout au long de mon cursus. Ce parcours m'a permis de contribuer activement au projet tout en développant mes compétences et mes connaissances."
					</>,
				],
				links: [
					{
						label: 'Site Web',
						href: 'https://www.celsius37.com/eng/cancercenter/',
					}
				],
			},
		],
	}
	resume = [
		{
			mode: Lexicon.utilities.modes.double,
			left: {
				headline: 'Une boîte à outils de compétences',
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Adaptabilité 🧩🌱',
						title: `
							L'adaptabilité est la capacité de pivoter de manière transparente et de s'insérer dans la dynamique évolutive d'un projet, tout comme une pièce manquante de puzzle 🧩 qui se développe 🌱 dans divers environnements.
						`,
					},
					{
						label: 'Analyse des besoins 📋',
						title: `
							L'analyse des besoins est le processus méticuleux de collecte, de documentation 📋 et de compréhension des éléments essentiels et des objectifs d'un projet afin d'assurer le développement et la mise en œuvre réussis.
						`,
					},
					{
						label: 'Auto-organisation 🧘🏿‍♂️',
						title: `
							L'auto-organisation est l'art de maintenir un équilibre intérieur 🧘🏿‍♂️ et de gérer indépendamment les tâches, favorisant ainsi un flux de travail harmonieux et une productivité efficace.
						`,
					},
					{
						label: 'Capacité de coordination 🚦',
						title: `
							La capacité de coordination consiste à rassembler de manière harmonieuse et collaborative des éléments et des individus divers, assurant ainsi un déroulement fluide 🚦 et l'exécution réussie des projets.
						`,
					},
					{
						label: 'Compétences en conception 💡',
						title: `
							Les compétences en conception sont l'art d'illuminer des idées et des concepts innovants 💡, donnant naissance à la vision fondamentale pour des projets réussis.
						`,
					},
					{
						label: 'Compétences en prototypage ⚗️💥',
						title: `
							Les compétences en prototypage consistent à assembler les éléments d'un projet, à expérimenter ⚗️ avec divers composants et solutions dans un processus passionnant qui stimule la créativité et l'innovation 💥, aboutissant à un résultat final dynamique et fonctionnel.
						`,
					},
					{
						label: 'Cycle de développement ⚙️⏳',
						title: `
							Le cycle de développement est comme les engrenages en mouvement du progrès ⚙️, marquant le processus continu de planification, de construction, de test et de raffinement d'un projet ⏳, garantissant son amélioration continue et son évolution.
						`,
					},
					{
						label: 'Diligence au travail 🧐🕒',
						title: `
							La diligence au travail est l'art d'aborder les tâches et les responsabilités avec un engagement méticuleux et inébranlable 🧐, garantissant que chaque détail est pris en compte et exécuté avec précision, même si cela signifie que le travail prend un peu plus de temps 🕒.
						`,
					},
					{
						label: 'Méthodes de travail agiles et classiques 🏛️🔄',
						title: `
							Combiner les méthodes de travail agiles et classiques revient à mélanger la force intemporelle des structures classiques 🏛️ avec l'adaptabilité dynamique et évolutive des approches agiles 🔄, créant ainsi une approche polyvalente de la gestion de projet et du développement.
						`,
					},
					{
						label: "Travail d'équipe 🤝🏿",
						title: `
							Le travail d'équipe est la puissante synergie des individus qui travaillent ensemble 🤝🏿 harmonieusement, en exploitant leurs compétences et leurs perspectives diverses pour atteindre des objectifs communs et offrir des résultats exceptionnels.
						`,
					},
				],
			},
			right: {
				headline: 'Mon stack, ma force',
				mode: Lexicon.utilities.modes.bars,
				content: [
					{
						label: 'Java',
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
						animated: true,
						...Lexicon.tapmeppe.resume,
						offset: {
							value: 2014
						},
						rate: {
							value: 2022
						},
					},
					{
						label: 'Typo3',
						...Lexicon.tapmeppe.resume,
						offset: {
							value: 2014
						},
						rate: {
							value: 2020
						},
					},
					{
						label: 'Joomla, Prestashop',
						title: 'Joomla, Prestashop',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2017
						},
						rate: {
							value: 2022
						},
					},
					{
						label: 'NodeJS, TypeScript, Angular, Bootstrap',
						title: 'NodeJS, TypeScript, Angular, Bootstrap',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2017
						},
					},
					{
						label: 'React.js, Next.js',
						title: 'React.js, Next.js',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2018
						},
						rate: {
							value: 2023
						},
					},
					{
						label: 'WooCommerce, Symfony',
						title: 'WooCommerce, Symfony',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2019
						},
						rate: {
							value: 2022
						},
					},
					{
						label: 'Docker, Playwright, VueJS',
						title: 'Docker, Playwright, VueJS',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2022
						},
						rate: {
							value: 2023
						},
					},
				],
			},
		},
		{
			mode: Lexicon.utilities.modes.double,
			left: {
				headline: 'Un monde de mots',
				mode: Lexicon.utilities.modes.list,
				content: [
					{
						label: 'Anglais (Cameroun): Langue maternelle',
						title: "J'ai grandi dans un foyer anglophone.",
					},
					{
						label: 'Français (Cameroun): Langue maternelle',
						title: "J'ai fréquenté dans une école francophone.",
					},
					{
						label: 'Allemand (Allemagne): Très bon en expression orale et écrite',
						title: `
							Après le lycée, je suis allé en Allemagne, où j'ai -étudié l'informatique et -ensuite fait carrière dans ce domaine.
						`,
					},
					{
						label: <>Japonais (Japon): Niveau animé 😅</>,
						title: `
							Jusqu'à présent, j'ai dû regarder plus de 10 000 animés en japonais. De temps en temps, je suis capable de comprendre le sens de certaines phrases &#128526.
						`,
					},
				],
			},
			right: {
				headline: "Le chemin vers l'expertise",
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Bachelor en sciences (B. Sc.) en informatique.',
					},
					{
						label: "Master en sciences (M. Sc.) en Information Management.",
					},
					{
						label: "Plus de 10 ans d'expérience en tant que développeur web.",
					},
					{
						label: 'Dont 4 ans en tant que développeur lead.',
					},
				],
			},
		},
		{
			mode: Lexicon.utilities.modes.single,
			full: {
				headline: "Odyssée professionnelle",
				mode: Lexicon.utilities.modes.grid,
				content: [
					{
						image: Lexicon.tapmeppe.images.tapmeppe,
						alt: `Logo de ${Lexicon.utilities.config.contact.business}.`,
						timeframe: "August 2023 - aujourd'hui",
						headline: Lexicon.tapmeppe.resume.faas,
						subline: Lexicon.utilities.config.contact.business,
						children: [
							<>
								Salut aux explorateurs du numérique 🙋🏿‍♂️. Je me lance dans une nouvelle aventure. Rejoignez-moi dans mon voyage en tant que freelance du web 💼. Des premiers pas dans le développement web à la création d'expériences en ligne, j'ai embrassé ce monde 🌐 dynamique. Ensemble, nous explorerons les étapes clés, les défis et les projets 🚀 passionnants qui jalonnent mon chemin. Bienvenue dans l'aventure!
							</>,
						]
					},
					{
						image: Lexicon.tapmeppe.images.intera,
						alt: `Logo of Intera GmbH.`,
						timeframe: 'July 2023 - Août 2023',
						headline: `Conseiller technique`,
						subline: `Intera GmbH`,
						children: [
							<>
								J'ai joué un rôle dans le relancement d'une application web en concevant une architecture moderne. De plus, j'ai fourni un support technique grâce à des activités telles que les revues de code et la programmation en binôme.
							</>,
						],
						badges: [
							'Gestion des exigences',
							'Communication',
							'Développement web',
							...Lexicon.tapmeppe.resume.badges.intera,
						],
					},
					{
						image: Lexicon.tapmeppe.images.sigma,
						alt: `Logo de Sigma Elektro GmbH.`,
						timeframe: 'Août 2019 - Juillet 2023',
						headline: `Développeur lead`,
						subline: `Sigma Elektro GmbH`,
						children: [
							<>
								En tant que responsable technique, j'étais chargé de tous les projets en ligne, garantissant un fonctionnement technique sans faille. J'ai géré les mesures de protection des données conformément aux exigences du RGPD et supervisé la migration réussie des applications d'entreprise des anciens vers les nouveaux fournisseurs de serveurs.
							</>,
						],
						badges: [
							'Coordination de projet',
							'Gestion des exigences',
							"Mentorat d'équipe",
							"Travail d'équipe",
							'Communication',
							"Développement web",
							...Lexicon.tapmeppe.resume.badges.sigma,
						],
					},
					{
						image: Lexicon.tapmeppe.images.pagecon,
						alt: `Logo de PageCon GmbH.`,
						timeframe: 'Mars 2017 - Juillet 2019',
						headline: `Développeur Full Stack Senior`,
						subline: <>PageCon GmbH &#128327;&nbsp;</>,
						children: [
							<>
								J'ai été activement impliqué dans le développement et la maintenance de divers sites Internet clients, y compris des pages d'accueil, des microsites et des lancements de sites.J'ai également mis en place des mesures robustes de protection des données pour assurer la conformité au RGPD. De plus, j'ai fourni des orientations et une supervision à des stagiaires et des étudiants tout au long de ce chapitre.
							</>,
						],
						badges: [
							'Analyse des exigences',
							"Travail d'équipe",
							'Communication',
							"Développement web",
							...Lexicon.tapmeppe.resume.badges.pagecon,
						],
					},
					{
						image: Lexicon.tapmeppe.images.alpha,
						alt: `Logo d'alpha-test GmbH.`,
						timeframe: 'Janvier 2014 - Février 2017',
						headline: `Développeur web`,
						subline: `alpha-test GmbH`,
						children: [
							<>
								J'ai joué un rôle clé dans la mise en place de <span title="Un outil d'évaluation en ligne pour améliorer divers processus.">PIAT<sup>&#174;</sup></span>, le produit principal de l'entreprise. De plus, j'ai contribué au développement et à la maintenance du site web de l'entreprise.
							</>,
						],
						badges: [
							'Analyse des exigences',
							"Travail d'équipe",
							'Communication',
							"Développement web",
							...Lexicon.tapmeppe.resume.badges.alpha,
						],
					},
					{
						image: Lexicon.tapmeppe.images.celsius37,
						alt: `Logo of celsius37.com AG.`,
						timeframe: 'Mars 2010 - Octobre 2012',
						headline: `Développeur web (étudiant en alternance)`,
						subline: `Celsius37.com AG`,
						children: [
							<>
								Mes responsabilités comprenaient la maintenance rigoureuse et la résolution efficace des problèmes du celsius37<sup>&trade;</sup> CancerCenter. De plus, j'ai contribué activement au développement de fonctionnalités innovantes et d'améliorations.
							</>,
						],
						badges: [
							"Travail d'équipe",
							'Communication',
							"Développement web",
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
				headline: 'Administration',
				list: {
					consulting: {
						headline: 'Conseil et planification',
						description: 'Fournir des compétences et des conseils sur les stratégies de développement web et la planification de projets.',
					},
					management: {
						headline: 'Gestion de projet',
						description: "Coordonner efficacement et superviser tous les aspects d'un projet de développement web pour garantir qu'il soit livré dans les délais et dans le budget.",
					},
					requirements: {
						headline: 'Analyse des exigences',
						description: "Examiner méticuleusement les besoins et objectifs du projet, travailler en étroite collaboration avec le client pour définir des exigences claires et détaillées qui serviront de base à la réussite du projet de développement web.",
					},
					conceptualising: {
						headline: 'Conceptualisation',
						description: 'Transformer des idées et des objectifs en concepts créatifs et innovants, tout en veillant à ce que chaque projet ait une identité visuelle et fonctionnelle forte et unique.',
					},
					mentoring: {
						headline: 'Mentorat',
						description: [
							<>
								<span title="Révisions de code, sessions de pair programmation, etc.">Guider et accompagner</span> les développeurs juniors, favoriser leur croissance et garantir des pratiques de code et de développement de haute qualité.
							</>,
						],
					},
					documentation: {
						headline: 'Documentation',
						description: 'Création de documentation pour les fonctionnalités, les fonctionnalités et les processus du site web.',
					},
				},
			},
			implementation: {
				headline: 'Implementation',
				list: {
					website: {
						headline: 'Sites Web',
						description: "C'est le service de base où les sites web sont créés en fonction des exigences du client.",
					},
					applications: {
						headline: 'Applications Web',
						description: 'Création de solutions web uniques et sur mesure avec des fonctionnalités dynamiques en fonction des exigences du client.',
					},
					responsive: {
						headline: 'Conception web responsive',
						description: "Veiller à ce que les sites web soient optimisés pour différentes tailles d'écran et dispositif.",
					},
					fullstack: {
						headline: 'Développement full-stack',
						description: `Offrant à la fois des services de développement front-end et back-end pour créer des solutions web complètes.`,
					},
					database: {
						headline: 'Bases de données',
						description: 'Création et intégration de bases de données pour stocker et gérer les données de site web.',
					},
					boilerplates: {
						headline: 'Boilerplates',
						description: [
							<>
								Intégration et personnalisation de plateformes <span title="Content Management Systems">CMS</span> comme WordPress, Joomla et de frameworks comme <span title="Fun fact: Ce site web utilise AstroJs comme framework.">AstroJs</span>, NextJs.
							</>
						],
					},
					ecommerce: {
						headline: 'e-Commerce',
						description: "Création de boutiques en ligne et de systèmes de panier d'achat pour la vente de produits ou de services.",
					},
					api: {
						headline: "Développement d'API",
						description: [
							<>
								La création d'<span title="Application Programming Interfaces">APIs</span> robustes et efficaces pour permettre un échange de données fluide et une intégration avec des services tiers, améliorant ainsi la fonctionnalité et la connectivité de vos applications web.
							</>
						],
					},
				},
			},
			optimisation: {
				headline: 'Optimisation',
				list: {
					automation: {
						headline: `La digitalisation et l'automatisation`,
						description: `La digitalisation et l'automatisation des processus d'entreprise impliquent l'intégration de la technologie et l'optimisation des flux de travail pour améliorer l'efficacité, réduire les interventions manuelles et propulser l'organisation vers un fonctionnement plus technologiquement avancé et agile.`,
					},
					performance: {
						headline: 'Performance',
						description: 'Amélioration de la vitesse et des performances du site web grâce à diverses techniques.',
					},
					security: {
						headline: 'Mesures de sécurité',
						description: "Veiller à ce que les sites web soient sécurisés et mettre en place des certificats SSL pour le cryptage.",
					},
					seo: {
						headline: 'SEO',
						description: "Optimiser les sites web pour les moteurs de recherche afin d'améliorer leur visibilité dans les résultats de recherche.",
					},
					analytics: {
						headline: 'Analyses',
						description: "Mise en place d'outils de suivi et d'analyse pour surveiller le trafic sur le site web et le comportement des utilisateurs.",
					},
				},
			},
			delivery: {
				headline: 'Produit final',
				list: {
					tests: {
						headline: 'Assurance qualité',
						description: 'Effectuer des tests approfondis pour garantir que les sites Web sont exempts de bugs et fonctionnent correctement.',
					},
					training: {
						headline: 'Formation et ateliers',
						description: "Offrir des sessions de formation aux clients sur la manière d'utiliser et de mettre à jour leurs sites web.",
					},
					deployment: {
						headline: 'Déploiement',
						description: "Lancement efficace et sécurisé de vos applications web sur des serveurs en direct, garantissant des transitions en douceur de l'environnement de développement à l'environnement de production pour une expérience utilisateur fluide.",
					},
					relocation: {
						headline: 'Transfert',
						description: "Transférer en toute sécurité et en toute transparence votre site Web ou votre application Web d'un environnement d'hébergement à un autre, en réduisant au minimum les temps d'arrêt et en garantissant l'intégrité des données lors du processus de transfert.",
					},
				},
			},
			miscellaneous: {
				headline: 'Divers',
				list: {
					miscellaneous: {
						headline: 'Divers',
						description: [
							<>
								Vous n'avez pas trouvé ce que vous cherchiez? Pas de souci!<br></br>
								Si cela concerne le web, il y a de fortes chances que je puisse vous aider ou du moins vous offrir des conseils. N'hésitez pas à me contacter, je serais ravi d'entendre parler de votre projet.
							</>
						],
					},
				},
			},
			// maintenance: {},
		},
		miscellaneous: {
			more: 'Learn more',
			message: (service: string) => ({
				subject: `Demande de renseignements "${service}"`,
				body: `Bonjour. Je suis intéressé par le service suivant: "${service}".`,
			}),
		}
	}

	constructor() {
		super('fr', 'Français')
	}
}
