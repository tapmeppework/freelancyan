import ABCD from '@bloc/ABCD'
import type { Snippet } from '@framework'
import Lexicon0 from './LexiconABCD'
import Utils from '@bloc/Utils'

/**
 * @classdesc this class is used to set the texts in the English language.
 * @final
 */
export default class Lexicon<Miscellaneous = any> extends Lexicon0<Miscellaneous> {
	private static readonly zyxw = {
		index: {
			description: `
					Welcome to ${Lexicon.utilities.config.contact.business} 👋🏿.\n
					My name is ${Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ and I am a Technical Consultant and Full-Stack Developer 🤘🏿.
				`,
		},
		pages: {
			services: {
				href: 'services',
				headline: 'Services',
				description: `
					My comprehensive services as a freelance web developer, including project management, requirements analysis, development, and more.
				`,
				preamble: `
					As a freelance web developer, I am your dedicated partner in crafting exceptional web solutions. Explore a range of services designed to bring your digital visions to life. From requirements analysis to development, I am here to transform your ideas into reality.
				`,
			},
			portfolio: {
				href: 'portfolio',
				headline: 'Portfolio',
				description: `
					A showcase of my projects as a web developer. Dive into a collection of applications that reflect my expertise in creating functional and visually appealing experiences.
				`,
				preamble: `
					Welcome to my portfolio! Here, I proudly present a curated selection of my projects, each representing the culmination of my dedication, creativity, and technical prowess as a web developer. Browse through these examples to witness firsthand the diverse range of web applications I have had the privilege to bring to life. Whether you seek inspiration or are interested in partnering with me, this portfolio is a testament to my commitment to delivering exceptional solutions.
				`,
			},
		},
	}

	_404 = {
		action: 'Go to homepage',
	}
	abcd = {
		harmony: {
			error: `Something went wrong. Please <a href='${Lexicon.utilities.contact}'>contact the administrator</a>.`,
			more: 'Read more',
			less: 'Read less',
			others: 'Others',
			processing: 'Processing ...',
			diashow: 'Diashow',
		},
		navigation: {
			header: {
				logo: Lexicon.tapmeppe.logo('The company logo.'),
				aria: 'Mobile header navigation.'
			},
			footer: {
				copyright: (copy: Snippet, year: number) => <>Copyright {copy} {year} {Lexicon.utilities.config.contact.business}</>
			},
			carousel: {
				previous: 'Previous slide',
				next: 'Next slide',
				slide: 'Slide',
			},
			modal: {
				close: 'Close',
				languages: {
					headline: 'Language detection',
					body: `The website is currently set to '${this.label}'. Would you prefer to switch to one of the following languages?`,
				},
				third: {
					party: {
						headline: 'I value your privacy',
						body: <>I employ cookies 🍪 to enhance your browsing experience and analyse the traffic. By clicking 'Accept', you consent to the use of third-party cookies.</>,
						accept: 'Accept',
					},
				},
			},
			schemes: {
				auto: 'Auto',
				dark: 'Dark',
				light: 'Light',
			},
			scroll: {
				top: 'Scroll to the top.',
			},
		},
		networks: {
			linkedin: { href: Lexicon.tapmeppe.networks.linkedin },
			github: { href: Lexicon.tapmeppe.networks.github },
		},
		pages: {
			header: {
				index: {
					href: 'index',
					headline: 'Home',
					...Lexicon.zyxw.index,
					preamble: <>My name is {Lexicon.utilities.config.contact.name} 🙋🏿‍♂️ and I am a Technical Consultant and Full-Stack Developer 🤘🏿.</>,
				},
				...Lexicon.zyxw.pages,
				resume: {
					href: 'resume',
					headline: 'Resume',
					description: `
						Explore my professional journey as a web developer through my resume. Discover the skills, experiences, and qualifications that make me a reliable and proficient choice for web development projects.
					`,
					preamble: `
						Welcome to my resume page! Here, I offer a glimpse into my career as a web developer. I have compiled my skills, experiences, and qualifications to provide you with an overview of what I bring to the table. Whether you are looking to collaborate on a project or simply want to learn more about my background, this resume is a valuable resource to understand my professional journey in web development.
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
					description: `Connect with me to uncover the thrilling and humorous everyday life of a versatile polymath, balancing rocket-powered adventures 🚀, parenting a precocious toddler 👶, and late-night computer coding 💻.`,
					preamble: <>
						When I am not conquering the treacherous Himalayan peaks in my rocket-powered race car 🚀, all while single-handedly cracking the enigma of cold fusion to secure the coveted Nodel Prize, I am back index engaging in the noble task of elucidating complex social concepts to my precocious toddler 👶 at the ungodly hour of 3 o'clock ⏰ in the morning. And, after a small but effective bribery-based diplomacy, I successfully convince my little one that 3 AM is indeed the designated sleepy-sleepy time.<br></br>
						But do you think I then drift off into the land of dreams? Of course not 😄! I am right back in front of my computer; because, as it turns out, sleep is overrated for a versatile polymath like me 😎.<br></br>
						If you are curious about the rest of this thrilling tale, do not hesitate to reach out to uncover the grand epic that is my everyday life 😉!
					</>,
				},
				legal: {
					href: 'legal',
					headline: 'Legal notice',
					description: `Discover the legal notice.`,
				},
				privacy: {
					href: 'privacy',
					headline: '', //'Privacy policy',
					description: '',
				},
			},
			phantom: {
				_404: {
					headline: 'Page not found',
					...Lexicon.zyxw.index,
					preamble: <>
						Oops 😅! You have ventured into the digital wilderness, and it seems you have taken a wrong turn 🗺️. Do not worry, I am on the case to rescue you from this cyber maze 🦸🏿‍♂️! In the meantime, feel free to <a href={Lexicon.utilities.portfolio}>explore some of my digital wonders</a> 🚀🌟. If you need immediate assistance, <a href={Lexicon.utilities.contact}>reach out to the administrator</a> 📞👨🏿‍💻. Until then, enjoy this little detour through the virtual cosmos 🌌🌠!
					</>,
				},
				gallery: {
					href: 'gallery',
					headline: 'Gallery',
				},
			},
		},
	}
	contact = {
		message: {
			subject: 'Greetings and salutations.',
			body: `Hello there. I would like to know the rest of the story. 😅`,
		},
		me: Lexicon.tapmeppe.contact.me,
		networks: 'Social Networks',
		office: {
			headline: 'Office hours',
			url: Lexicon.tapmeppe.office.url,
			content: <>Make an appointment.</>
		},
		location: {
			headline: 'Veni, vidi, vici',
			zoom: Lexicon.tapmeppe.contact.zoom,
			error: 'The address could not be found.',
			title: 'This is where the magic happens.',
			// coordinates: Lexicon.tapmeppe.contact.coordinates,
		},
	}
	index = {
		about: {
			headline: Lexicon.tapmeppe.contact.me,
			body: <>
				I specialise in <strong>crafting tailored online solutions</strong> that help individuals and small companies thrive in the digital age.
				Whether you are looking to develop or revamp a web application; my goal is to make your vision a reality.<br></br>
				My professional adventure in web development started around {Lexicon.tapmeppe.resume.min.value} and I have witnessed firsthand the transformative power of the digital landscape.<br></br>
				Let us collaborate to bring your unique brand to life on the web.
			</>,
			contact: `Get in touch 📧.<br/>Let us chat 💬!`,
		},
		preamble: {
			badge: <>Your MVP 💻 in 2 months 😎</>,
			body: [
				'Transforming ideas 💡 into digital products ​🚀',
				'Your MVP 💻 in 2 months 😎 with JS & PHP',
				'Analysis, planning, implementation & follow up',
				'You are an individual, start-up or small company',
				'…',
			],
			headline: 'let us chat 💬',
			pages: Lexicon.zyxw.pages,
		},
		profile: Lexicon.tapmeppe.profile('The profile image.'),
	}
	legal = [
		[
			{
				headline: {
					primary: 'According to § 5 TMG',
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
			// 		primary: 'Tax ID',
			// 	},
			// 	paragraphs: [
			// 		<>
			// 			Sales tax identification number in accordance with § 27 a of the "Umsatzsteuergesetz": <strong>{Lexicon.tapmeppe.legal.tax}</strong>.
			// 		</>
			// 	],
			// },
		],
	]
	portfolio = {
		headline: 'Uncover my innovative projects',
		mode: Lexicon.utilities.modes.timeline,
		content: [
			{
				image: Lexicon.tapmeppe.images.portfolio.afroshops,
				alt: 'Afro Shops logo',
				timeframe: 'April 2024 - today',
				headline: `Founder`,
				subline: 'Afro Shops 🛒🧺',
				children: [
					<>
						Afro Shops is an online marketplace 🛒 connecting the African diaspora in the DACH region (Germany, Austria, Switzerland) with passionate sellers of Afrocentric goods. Thus celebrating the African culture and heritage through authentic products.
					</>,
				],
				badges: [
					'Management', 'Marketing', 'e-Commerce', 'Bootstrap', 'Git', 'Javascript', 'NodeJS', 'PHP', 'MySQL', 'Playwright',
				],
				links: [
					{
						label: 'Follow us',
						href: `https://www.linkedin.com/showcase/afroshops`,
						// label: 'Website',
						// href: `https://afro-shops.com`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.albion,
				alt: 'Albion Academy logo',
				timeframe: 'February 2024 - April 2024',
				headline: `Web developer & Consultant`,
				subline: 'Albion Academy GmbH',
				children: [
					<>
						<strong>03-04.2024 - analysis, prototyping, conception</strong> -
						Feasibility study (including programming of prototypes) on the implementation of an information system for a training academy.
					</>,
					<>
						<strong>02-03.2024 - WordPress programming</strong> -
						Implementation of new functionalities to improve the user experience and the company's automation process.
					</>,
				],
				badges: [
					'CSS', 'HTML', 'Javascript', 'WordPress',
					'Docker', 'Navision', 'NextCloud'
				],
				links: [
					{
						label: 'Website',
						href: `https://albion.eu/`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.kemitnsure,
				alt: 'Kemit & Sure logo',
				timeframe: 'January 2024 - May 2024',
				headline: `Consultant (digital relaunch)`,
				subline: 'Kemit & Sure SARL',
				children: [
					<>
						<strong>04-05.2024 - implementation</strong> -
						After spending the first quarter of 2024 strategising, the development team in charge of implementation took over. I continue in a consulting capacity, thus ensuring that the customer's vision eventually becomes virtual reality.
					</>,
					<>
						<strong>01-03.2024 - analysis, conception, planning</strong> -
						After a year of restructuring in 2023, the Kemit n Sure team had the opportunity to better understand the insurance needs in Cameroon and within the African (Cameroonian) diaspora. The year 2024 looks promising with a major transformation on the website designed to offer an exceptional experience.
					</>,
				],
				badges: [
					'Communication', 'Docker', 'Jira', 'Planning',
					'Requirements management', 'WordPress',
				],
				links: [
					{
						label: 'Announcement',
						href: `https://www.linkedin.com/posts/donald-mekountchou-529378140_kemitandsure-partagezlamour-innovation-activity-7147896260417552384-igoi`,
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.bergemann,
				alt: 'Bergemann & Höhne GbR logo',
				timeframe: 'November 2023 - February 2024',
				headline: `Professor for Frontend (IT formation)`,
				subline: 'Bergemann & Höhne GbR',
				children: [
					<>
						Technical implementation of the formation teaching: Implementation of the curriculum, creation of the weekly plans and lessons, supervision of the 10-members group, as well as individual student support in one-on-one format (Content-related assistance with respective issues).
					</>,
					<>
						For the personal issues of the participants, we are supported by a social pedagogue (e.g., while determining the individual learning pace).
					</>,
					<>
						Improvement and co-design of the training content and processes throughout the team.
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
				alt: 't@pm3pp3 w0rk logo in gray.',
				timeframe: 'August 2023 - today',
				headline: `Freelancyan`,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						An open-source framework 🌐 that empowers individuals and small businesses to create basic websites 🚀. It is built on the foundation 💻 of <a href="https://astro.build/" target="_blank">Astro JS</a>, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://lesscss.org/" target="_blank">Less CSS</a>, <a href="https://www.solidjs.com/" target="_blank">Solid JS</a> , <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> and <a href="https://webpack.js.org/" target="_blank">webpack</a>. It paves the way for your digital projects 📲.
					</>,
					<>
						This website is powered by this very own framework.
					</>,
				],
				badges: ['Astro JS', 'Bootstrap', 'Chat GPT', 'Less CSS', 'Node JS', 'Solid JS', 'TypeScript', 'webpack',],
				links: [
					{
						label: 'Source code',
						href: `${Lexicon.tapmeppe.networks.github}/freelancyan`,
						title: 'New features every week. 😜',
					},
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.intera,
				alt: `Logo of Intera GmbH.`,
				timeframe: 'July 2023 - August 2023',
				headline: `Technical consultant`,
				subline: `Intera GmbH`,
				children: [
					<>
						I played a role in a web application relaunch by designing a modern architecture. Additionally, I provided technical support through activities such as code reviews and pair programming.
					</>,
				],
				badges: [
					'Requirements management',
					'Communication',
					'Web development',
					...Lexicon.tapmeppe.resume.badges.intera,
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.logo,
				alt: 'SIGMA-ELEKTRO GmbH full logo.',
				timeframe: 'March 2023 - June 2023',
				headline: `Infrastructure migration`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						In my most recent role at <em>SIGMA SPORT</em>, my primary responsibility was to facilitate the seamless transfer of knowledge to my successor. Additionally, I spearheaded the migration of the company's web infrastructure from the previous server provider to a new one, all within the same timeframe.
					</>,
					<>
						Throughout the project, our efforts were dedicated to the following key tasks:
						<mark>1</mark> Assessing, identifying and prioritising various <span title="Before the migration the company over <strong>150</strong> domains & subdomains running.">company applications</span> eligible for migration.
						<mark>2</mark> Coordinating the migration process with product owners, the executive board,and colleagues who relied on these applications daily.
						<mark>3</mark> Thoroughly documenting each application before the migration.
						<mark>4</mark> Executing the migration, including occasional upgrades, rigorous testing, and necessary refactoring of the applications.
						<mark>5</mark> The culmination of our work involved successfully releasing the applications onto the new environment.
					</>,
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.newsletter,
				alt: 'A screenshot of the Beta tester form.',
				timeframe: 'October 2022 - April 2023',
				headline: 'Newsletter form framework',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						In 2022, we developed a lightweight framework for newsletter forms. This innovative solution was gradually implemented across all SIGMA SPORT newsletter forms. A process that unfolded over approximately 7 months.
					</>,
					<>
						The key features include:
						<mark>1</mark> A user-friendly interface that can be put together flexibly.
						<mark>2</mark> A data-handling <span title="A server acting as a reverse proxy.">server</span> responsible for receiving, validating, and forwarding data to the newsletter center.
						<mark>3</mark> Finally a newsletter center accessible via an <span title="API is the acronym for Application Programming Interface. A software intermediary that allows two applications to talk to each other.">API</span>.
					</>,
				],
				badges: ['API', 'Bootstrap', 'CSS', 'HTML', 'Javascript', 'PHP',],
				links: [
					{
						label: 'Beta tester',
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
				alt: 'A screenshot of the homepage.',
				timeframe: 'September 2022 - December 2022',
				headline: `Website relaunch (VDO)`,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						The <a href="#sigmasport-website-relaunch">relaunch of SIGMA SPORT's website</a> brought about an interesting byproduct: a stable and reusable <span title="<a href='https://wordpress.org/'>WordPress</a> is a web content management system.">WordPress theme</span>. We duplicated this theme and adapted it to align perfectly with the company <span title="VDO cyclecomputing">second brand</span>'s overall design.
					</>,
					<>
						Yet, our most significant challenge throughout this process was navigating the intricacies of information management and crafting an effective content strategy.
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
						The most prominent product of SIGMA SPORT's automation campaign was the relaunch of the company's website. The new website was based on <a href="https://wordpress.org/" target="_blank">WordPress</a> and <a href="https://woocommerce.com/" target="_blank" title="An eCommerce platform based on WordPress.">WooCommerce</a>. It combined the marketing and commercial <span title="Among others from the old website.">features</span>, the new online blog as well as the new online shop in one well designed website.
					</>,
					<>
						More information can be found in the section <a href="#sigmasport-automation-main-processes">Automation of the main processes</a>.
					</>,
				],
				badges: [
					'Communication', 'Conception', 'Coordination',
					'Javascript', 'PHP', 'Requirements analysis',
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
				timeframe: 'January 2021 - February 2023',
				headline: 'Main processes automation',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						Following the successful launch and ongoing maintenance of its first <a href="#sigmasport-shop-launch">online shop</a>, SIGMA SPORT took a significant step in alignment with the company's vision for the 2020 - 2030 decade. The company decided to forge closer connections between its primary website, online blog, online shop, ERP system, ticket system, accounting system and newsletter tools. This strategic move was made to automate the main business processes and to enhance the overall user experience, benefitting both valued customers and employees.
					</>,
					<>
						As the lead developer at SIGMA SPORT, I had the privilege of taking on the following key responsibilities:
						<mark>1</mark> Spearheading the development of the new website, online blog, and online shop using <a href="https://wordpress.org/" target="_blank">WordPress</a> and <a href="https://woocommerce.com/" target="_blank" title="An eCommerce platform based on WordPress.">WooCommerce</a>.
						<mark>2</mark> Orchestrating the seamless integration of the <span title="Enterprise Resource Planning (ERP) is a type of software system that helps organisations automate and manage core business processes for optimal performance.">ERP system</span>, the in-house ticket and accounting systems through <a href="https://getcomposer.org/" target="_blank" title="A dependency manager for PHP">Composer</a>, <a href="https://symfony.com/" target="_blank" title="A PHP framework for web projects">Symfony</a>, a <a href="https://jsonapi.org/" target="_blank">JSON-API</a> and <span title='EDIFACT is the abbreviation for "Electronic Data Interchange for Administration, Commerce and Transport".'>EDIFACT</span>.
					</>,
					<>
						The primary challenge we faced was constructing a system robust enough to manage 2 key issues.
						<mark>1</mark> A substantial volume of high-definition images and videos.
						<mark>2</mark> A high influx of interactions.<br></br>
						Feel free to <a href={Lexicon.utilities.contact}>reach out</a> if you want to know how we solved the problem &#128520;.
					</>,
					<>
						It is worth mentioning that my involvement concluded after the release of the new online shop and right before the development of a new newsletter concept.
					</>,
				],
				badges: ['Requirements management', 'Communication', 'Coordination', 'Architecture', 'API', 'Javascript', 'PHP', 'Symfony', 'EDIFACT', 'WordPress', 'WooCommerce'],
			},
			{
				id: 'sigmasport-sharing',
				image: Lexicon.tapmeppe.images.portfolio.sigmasport.sharing,
				timeframe: 'January 2021 - December 2021',
				headline: <>SIGMA Sharing <strong>v3</strong></>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						We embarked on the development of a web application that ingeniously visualised data from bike activities captured by SIGMA bike computers, presenting them through <span title="See <a href='https://leafletjs.com/'>Leaflet</a> and <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>.">dynamic maps</span> and <span title="See <a href='https://apexcharts.com/'>APEXCHART.JS</a>">insightful graphs</span>.
					</>,
					<>
						Fun fact, the <span title="The first version in 2018.">inception of this project</span> was actually a bachelor's thesis, serving as a feasibility study that I had the honor of overseeing.
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
				headline: 'Rox 12 reviews',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						We introduced a captivating microsite designed to showcase the global media's reaction to the then-newly launched ROX 12 SPORT bike computer... It was a marketing instrument.
					</>,
					<>
						The project featured a single major release, and all content-related updates were effortlessly handled by the marketing team through a dedicated administration area.
					</>,
					<>
						One of the standout features of the project was undoubtedly the infinite scroll behavior, enhancing the user experience.
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
					We introduced a dynamic platform for the SIGMA SPORT community. Here, members could freely share their biking adventures, insights, and tracks. Creating a space where fellow enthusiasts could relish similar experiences and emotions.
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
				headline: 'The Aura series',
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						We developed a compelling microsite to spotlight the <span title="A lineup of SIGMA SPORT lamps">Aura series</span>. This marketing tool was deployed on tablets at numerous events, fairs, and seminars throughout the 2019 biking season.
					</>,
					<>
						I fondly recall the standout feature of the project, the drag & drop functionality. A delightful addition to the company's marketing arsenal! &#128513;
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
				headline: <>The E-Bike EOX<sup>&#174;</sup> series</>,
				subline: `SIGMA-ELEKTRO GmbH`,
				children: [
					<>
						We crafted an impactful microsite dedicated to the promotion of the SIGMA SPORT EOX<sup>&#174;</sup> series. This marketing tool made its appearance at numerous events, fairs, and seminars throughout the biking seasons of 2019, 2020, and 2021.
					</>,
					<>
						While the website may appear unassuming, the project presented an intriguing challenge. Namely andling a substantial volume of high-definition images.
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
				timeframe: 'February 2019 - July 2019',
				headline: 'Infrastructure migration',
				subline: <>PageCon GmbH &#128327;&nbsp;</>,
				children: [
					<>
						On the 31st of July 2019, <em>PageCon GmbH &#128327;&nbsp;</em>, a well-established online agency specializing in serving mid-sized companies, closed its doors for the last time.
					</>,
					<>
						The months leading up to this significant event were marked for me by two crucial activities:
						<mark>1</mark> Meticulously documenting the applications before the migration.
						<mark>2</mark> Coordinating the seamless transition with the new online agencies.
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
				timeframe: 'August 2018 - December 2018',
				headline: 'SIGMA compatibility',
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						We introduced a captivating microsite tailored for the SIGMA SPORT community.This platform served as a valuable resource, allowing users to verify the compatibility of various SIGMA SPORT devices, which could be bike computers or smartwatches; with common mobile devices such as smartphones, tablets, or laptops.
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
				timeframe: 'January 2018 - February 2023',
				headline: <>SIGMA WEBSTORE v1 &#128327;&nbsp;</>,
				subline: <>Sigma Elektro GmbH</>,
				children: [
					<>
						Introducing the SIGMA SPORT online store, your one-stop destination for SIGMA spare parts. After several years of being an Amazon vendor, <span title="My team and yours truly.">we</span> embarked on an exciting journey to launch SIGMA's very own online shop. This shop primarily focused on providing spare parts for the company's devices, ranging from batteries and USB cables to elastic straps and more. It was the go-to source for all the essentials to keep the SIGMA SPORT gear in top shape.
					</>,
					<>
						<strong>This marked my debut in a managerial role in a project from its inception.</strong> I had the opportunity to guide the team while contributing to the project successful completion.
					</>,
				],
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.wormsyd,
				timeframe: 'May 2017 - December 2019',
				headline: <>WOrMSYd &#128327;&nbsp;</>,
				subline: Lexicon.utilities.config.contact.business,
				children: [
					<>
						WOrMSYd, short for WarehOuse Management SYstem, marked my 2<sup>nd</sup> attempt to launch a robust warehouse management system tailored for the African market.
					</>,
					<>
						Regrettably, the project faced multiple challenges, including the unforeseen impact of the COVID-19 pandemic. However, despite the setbacks, I consider it a valuable learning experience, equipping me with the knowledge and insights to approach it even more effectively in the future.
					</>,
					<>
						And yes, there will be a 3<sup>rd</sup> attempt... &#128526;
					</>
				],
				links: [], //@see https://www.facebook.com/wormsyd/
			},
			{
				image: Lexicon.tapmeppe.images.portfolio.bloom,
				timeframe: 'March 2017 - October 2018',
				headline: 'Booking functionalities',
				subline: <>Bloom's</>,
				children: [
					<>
						In March 2017, I inherited the "Bloom's" website project from my predecessor. Over the course of March 2017 to October 2018, I took the reins and expanded the website's functionalities significantly.
					</>,
					<>
						One notable achievement was the development of the booking functionalities. The website serves as the user interface, seamlessly interacting with the company's ERP system through a robust API.
					</>
				],
				links: [
					{
						label: 'Appointments',
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
				timeframe: 'March 2017 - January 2019',
				headline: `MOTEC Wheels, Ultra Wheels, artFORM Wheels`,
				subline: <>AVO Fahrzeugtechnik GmbH & Co. KG</>,
				children: [
					<>
						In March 2017, I assumed responsibility for the MOTEC Wheels, Ultra Wheels and artFORM Wheels projects, taking over from my predecessor.Over the span of March 2017 to January 2019, I embarked on an extensive enhancement of the websites functionalities.
					</>,
					<>
						A notable achievement during this period was the relaunch of the websites, leveraging <a href="https://www.joomla.org/" target="_blank">Joomla</a> as the framework. Furthermore, I successfully established connections between the websites and the databases from TÜV Nord and TÜV Süd.
					</>,
					<>
						The most significant challenge in this endeavor was the development of a sophisticated data structure capable of effectively integrating data from both sources.
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
					{
						label: 'artFORM Wheels',
						href: 'https://www.artform-wheels.de/',
					},
				],
			},
		],
	}
	privacy = []
	resume = [
		{
			mode: Lexicon.utilities.modes.double,
			left: {
				headline: 'A toolbox of abilities',
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Adaptability 🧩🌱',
						title: `
							Adaptability is the ability to seamlessly pivot and fit into evolving project dynamics, much like a missing puzzle piece 🧩 that grows 🌱 in various environments.
						`,
					},
					{
						label: 'Agile and classic working methods 🏛️🔄',
						title: `
							Combining Agile and classic working methods is akin to blending the timeless strength of classical structures 🏛️ with the dynamic, evolving adaptability of Agile approaches 🔄, creating a versatile approach to project management and development.
						`,
					},
					{
						label: 'Conception skills 💡',
						title: `
							Conception skills are the art of illuminating innovative ideas and concepts 💡, giving birth to the foundational vision for successful projects.
						`,
					},
					{
						label: 'Coordination ability 🚦',
						title: `
							Coordination ability is the skill of bringing diverse elements and individuals together in a seamless and collaborative manner, ensuring the smooth flow 🚦 and successful execution of projects.
						`,
					},
					{
						label: 'Development life cycle ⚙️⏳',
						title: `
							Development life cycle is like the turning gears of progress ⚙️, marking the ongoing process of planning, building, testing, and refining a project ⏳, ensuring its continuous improvement and evolution.
						`,
					},
					{
						label: 'Diligence at work 🧐🕒',
						title: `
							Diligence at work is the art of approaching tasks and responsibilities with a meticulous and unwavering commitment 🧐, ensuring that every detail is addressed and executed with precision, even if it means the work takes a bit longer 🕒.
						`,
					},
					{
						label: 'Prototyping skills ⚗️💥',
						title: `
							Prototyping skills involve piecing together the elements of a project, experimenting ⚗️ with various components and solutions in an exciting process that ignites 💥 creativity and innovation, leading to a dynamic and functional final result.
						`,
					},
					{
						label: 'Requirements analysis 📋',
						title: `
							Requirements analysis is the meticulous process of collecting, documenting 📋, and understanding the essential elements and objectives of a project to ensure successful development and implementation.
						`,
					},
					{
						label: 'Self organisation 🧘🏿‍♂️',
						title: `
							Self organisation is the art of maintaining inner balance 🧘🏿‍♂️ and independently managing tasks, fostering a harmonious workflow and efficient productivity.
						`,
					},
					{
						label: 'Teamwork 🤝🏿',
						title: `
							Teamwork is the powerful synergy of individuals, working together 🤝🏿 harmoniously, leveraging their diverse skills and perspectives to achieve common goals and deliver exceptional results.
						`,
					},
				],
			},
			right: {
				headline: 'My stack, my strength',
				mode: Lexicon.utilities.modes.bars,
				content: [
					{
						label: 'Java',
						title: 'Java, Scala and Maven are mainly used privately to simplify my life. 😂',
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
						label: 'Next.js',
						title: 'Next.js',
						...Lexicon.tapmeppe.resume,
						offset: {
							value: 2018,
						},
						rate: {
							value: 2023,
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
						label: 'Docker, Playwright',
						title: 'Docker, Playwright',
						...Lexicon.tapmeppe.resume,
						animated: true,
						offset: {
							value: 2023,
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
				headline: 'A world of words',
				mode: Lexicon.utilities.modes.list,
				content: [
					{
						label: 'English (Cameroon): Native speaker',
						title: 'I grew up in an English speaking household.',
					},
					{
						label: 'French (Cameroon): Native speaker',
						title: 'I attended a French speaking school.',
					},
					{
						label: 'German (Germany): Very good in speaking and writing',
						title: `After high school, I moved to Germany, where I studied and subsequently made my career in computer sciences.`,
					},
					{
						label: <>Japanese (Japan): Anime level 😅</>,
						title: `So far I must have watched over 10000 Anime in Japanese. So now and then I capable of picking up the meaning of some sentences &#128526.`,
					},
				],
			},
			right: {
				headline: 'The path to expertise',
				mode: Lexicon.utilities.modes.set,
				content: [
					{
						label: 'Bachelor of Science (B. Sc.) in Computer Science.',
					},
					{
						label: 'Master of Science (M. Sc.) in Information Management.',
					},
					{
						label: 'More than 10 years of experience as a web developer.',
					},
					{
						label: 'Including 4 years as lead developer.',
					},
				],
			},
		},
		{
			mode: Lexicon.utilities.modes.single,
			full: {
				headline: 'Professional odyssey',
				mode: Lexicon.utilities.modes.grid,
				content: [
					{
						image: Lexicon.tapmeppe.images.resume.tapmeppe,
						alt: `Logo of ${Lexicon.utilities.config.contact.business}.`,
						timeframe: 'July 2023 - today',
						headline: Lexicon.tapmeppe.resume.faas,
						subline: Lexicon.utilities.config.contact.business,
						children: [
							<>
								Greetings, digital explorers 🙋🏿‍♂️. I am embarking on a new journey. Join me on my journey as a web freelancer 💼. From the early steps in web development to crafting online experiences, I have embraced this dynamic world 🌐. Together, we will explore the milestones, challenges, and exciting projects 🚀 that define my path. Welcome to the adventure!
							</>,
						]
					},
					{
						image: Lexicon.tapmeppe.images.resume.sigmasport,
						alt: `Logo of Sigma Elektro GmbH.`,
						timeframe: 'August 2019 - July 2023',
						headline: `Lead developer`,
						subline: `Sigma Elektro GmbH`,
						children: [
							<>
								As a technical lead, I held responsibility for all online projects, ensuring seamless technical operations. I managed data protection measures in accordance with GDPR requirements and oversaw the successful migration of enterprise applications from old to new server providers.
							</>,
						],
						badges: [
							'Project coordination',
							'Requirements management',
							'Team mentoring',
							'Teamwork',
							'Communication',
							'Web development',
							...Lexicon.tapmeppe.resume.badges.sigmasport,
						],
					},
					{
						image: Lexicon.tapmeppe.images.resume.pagecon,
						alt: `Logo of PageCon GmbH.`,
						timeframe: 'March 2017 - July 2019',
						headline: `Full stack developer (Senior)`,
						subline: <>PageCon GmbH &#128327;&nbsp;</>,
						children: [
							<>
								I have been actively involved in the development and upkeep of various customer internet sites, including homepages, microsites, and website launches.I have also implemented robust data protection measures to ensure GDPR compliance.Additionally, I have provided guidance and supervision to trainees and students throughout this chapter.
							</>,
						],
						badges: [
							'Requirements analysis',
							'Teamwork',
							'Communication',
							'Web development',
							...Lexicon.tapmeppe.resume.badges.pagecon,
						],
					},
					{
						image: Lexicon.tapmeppe.images.resume.alpha,
						alt: `Logo of alpha-test GmbH.`,
						timeframe: 'January 2014 - February 2017',
						headline: `Web developer`,
						subline: `alpha-test GmbH`,
						children: [
							<>
								I have played a key role in implementing <span title="An online assessment tool to enhance various processes.">PIAT<sup>&#174;</sup></span>, the company's main product. Additionally, I have contributed to the development and maintenance of the company's homepage.
							</>,
						],
						badges: [
							'Requirements analysis',
							'Teamwork',
							'Communication',
							'Web development',
							...Lexicon.tapmeppe.resume.badges.alpha,
						],
					},
					{
						image: Lexicon.tapmeppe.images.resume.celsius37,
						alt: `Logo of celsius37.com AG.`,
						timeframe: 'March 2010 - October 2012',
						headline: `Web developer (working student)`,
						subline: `Celsius37.com AG`,
						children: [
							<>
								My responsibilities included the diligent maintenance and effective troubleshooting of the <span title="A radiology information system.">celsius37<sup>&trade;</sup> CancerCenter</span>. Additionally, I actively contributed to the development of innovative features and enhancements.
							</>,
						],
						badges: [
							'Teamwork',
							'Communication',
							'Web development',
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
			consulting: {
				headline: 'Consulting',
				list: {
					requirements: {
						headline: 'Requirements analysis',
						description: "Meticulously examining the project needs and objectives, working closely with the customer to define clear and detailed requirements that serve as the foundation for the web development project's success.",
					},
					consulting: {
						headline: 'Consulting & Planning',
						description: 'Providing expertise and advice on web development strategies and project planning.',
					},
					management: {
						headline: 'Project management',
						description: 'Efficiently coordinate and oversee all aspects of a web development project to ensure it is delivered on time and within budget.',
					},
				},
			},
			implementation: {
				headline: 'Implementation',
				list: {
					conceptualising: {
						headline: 'Conceptualising',
						description: 'Transforming ideas and goals into creative and innovative concepts, while ensuring each project has a strong and unique visual and functional identity.',
					},
					applications: {
						headline: 'Web applications',
						description: 'Building web solutions with dynamic functionalities according to client needs.',
					},
					deployment: {
						headline: 'Deployment',
						description: 'Efficiently and securely launching your web applications to live servers, ensuring smooth transitions from development to production environments.',
					},
				},
			},
		},
		pricing: {
			headline: 'Pricing strategies',
			strategies: {
			},
		},
		miscellaneous: {
			more: 'Contact me',
			message: (service: string) => ({
				subject: `Inquiry about "${service}"`,
				body: `Hello there. I am interested in the following service: "${service}".`,
			}),
		},
	}

	constructor() {
		super(ABCD.config.language, 'English')
	}
}
