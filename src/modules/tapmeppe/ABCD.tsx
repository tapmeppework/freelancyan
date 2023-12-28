import Accordion, { Item } from '@abcd/Accordion'
import Model from './ABCD.model'

export default () => {
	const model = new Model(
		(href, target, label) => <a href={href} target={target}>{label}</a>,
	)
	return <Accordion
		class={model.classes.abcd.paragraph.center}
		headline="h2"
	>
		<Item headline="So you are a rebel, eh!" show={model.show.en}>
			<p>
				You just could not resist, you clicked and now you are here. Well, congratulations intrepid explorer 🎉! You have stumbled upon the secret hideout of the digital rebels 🥷🏿. Brace yourself because this website runs on the superheroic project: {model.project} 🚀.
			</p>
			{model.mine ?
				<>
					<p>
						This project served a triumvirate of purposes 🌟!
						<mark>1</mark> Legitimising my freelancing escapade with a website under my name.
						<mark>2</mark> Flaunting a portion of my skills with a playful dance of modern website elements.
						<mark>3</mark> Crafting a template for fellow trailblazers to swiftly launch their own basic website.
					</p>
					<p>
						Eager to ride the wave and use this template for your project 💻? Need a guiding hand or have a different wild idea 💡? Do not be shy, {model.contact('hit me up')} and let us shake things up together 🤝.
					</p>
				</> :
				<p>
					We are on a mission to put an end to the tyranny of projects and small businesses operating without a snazzy online presence 🤖. You want to be part of the resistance ✊🏿 or you are in need of digital support 💻? Do not be shy, {model.website('contact me')} and let us shake things up together 🤝.
				</p>
			}
		</Item>
		<Item headline="Du bist also ein Rebell, eh!" show={model.show.de}>
			<p>
				Sie konnten einfach nicht widerstehen, haben geklickt und sind jetzt hier. Herzlichen Glückwunsch unerschrockener Entdecker 🎉! Sie sind auf das geheime Versteck der digitalen Rebellen 🥷🏿 gestoßen. Machen Sie sich bereit, denn diese Website läuft auf dem heldenhaften Projekt: {model.project} 🚀.
			</p>
			{model.mine ?
				<>
					<p>
						Dieses Projekt erfüllte gleich drei Zwecke 🌟!
						<mark>1</mark> Es legitimiert meine Freiberufler-Eskapade mit einer Website unter meinem Namen.
						<mark>2</mark> Es zeigt einen Teil meiner Fähigkeiten mit einem verspielten Tanz moderner Website-Elemente.
						<mark>3</mark> Es erstellt eine Vorlage, damit Gleichgesinnte schnell ihre eigene grundlegende Website starten können.
					</p>
					<p>
						Bereit, auf der Welle zu reiten und diese Vorlage für Ihr Projekt 💻 zu verwenden? Brauchen Sie eine helfende Hand oder haben Sie eine andere wilde Idee 💡? Seien Sie nicht schüchtern, {model.contact('melden Sie sich bei mir')}, und lassen Sie uns gemeinsam etwas bewegen 🤝.
					</p>
				</> :
				<p>
					Wir haben die Mission, der Tyrannei von Projekten und kleinen Unternehmen ohne elegante Online-Präsenz 🤖 ein Ende zu setzen. Möchten Sie Teil des Widerstands ✊🏿 sein oder benötigen Sie digitale Unterstützung 💻? Seien Sie nicht schüchtern, {model.website('kontaktieren Sie mich')}, und lassen Sie uns gemeinsam etwas bewegen 🤝.
				</p>
			}
		</Item>
		<Item headline="Alors tu es un rebelle, eh!" show={model.show.fr}>
			<p>
				Vous n'avez tout simplement pas pu résister, avez cliqué et vous voilà. Eh bien, félicitations intrépide explorateur 🎉! Vous avez découvert la cachette secrète des rebelles numériques 🥷🏿. Attachez-vous, car ce site fonctionne grâce au projet héroïque: {model.project} 🚀.
			</p>
			{model.mine ?
				<>
					<p>
						Ce projet a servi à la fois trois objectifs 🌟!
						<mark>1</mark> Légitimer mon escapade en tant que freelance avec un site web à mon nom.
						<mark>2</mark> Exhiber une partie de mes compétences avec une danse joyeuse d'éléments de site web modernes.
						<mark>3</mark> Créer un modèle pour que d'autres pionniers puissent rapidement lancer leur propre site web de base.
					</p>
					<p>
						Prêt à surfer sur la vague et à utiliser ce modèle pour votre projet 💻? Besoin d'un coup de main ou avez-vous une autre idée sauvage 💡? N'hésitez pas, {model.contact('contactez-moi')}, et faisons bouger les choses ensemble 🤝.
					</p>
				</> :
				<p>
					Nous avons pour mission de mettre fin à la tyrannie des projets et des petites entreprises qui fonctionnent sans une présence en ligne élégante 🤖. Vous voulez faire partie de la résistance ✊🏿 ou vous avez besoin d'un soutien numérique 💻 ? N'hésitez pas, {model.website('contactez-moi')}, et faisons bouger les choses ensemble 🤝.
				</p>
			}
		</Item>
	</Accordion>
}

export const PAGE = Model.page("Dive into the minds behind this website ✨! Uncover the creative genius, passion, and expertise that drive our digital endeavors. Learn more about the masterminds 🧠 shaping the digital landscape 💻 and bringing innovation to life 🚀.")
