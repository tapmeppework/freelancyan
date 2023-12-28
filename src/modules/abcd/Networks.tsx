import type { Networks } from '@bloc/ABCD.types'
import Bitbucket from '@icons/Bitbucket'
import Discord from '@icons/Discord'
import Codepen from '@icons/Codepen'
import Facebook from '@icons/Facebook'
import FacebookMessenger from '@icons/FacebookMessenger'
import Patreon from '@icons/Patreon'
import Pinterest from '@icons/Pinterest'
import Quora from '@icons/Quora'
import Github from '@icons/Github'
import Gitlab from '@icons/Gitlab'
import Instagram from '@icons/Instagram'
import Linkedin from '@icons/Linkedin'
import Mastodon from '@icons/Mastodon'
import Medium from '@icons/Medium'
import Reddit from '@icons/Reddit'
import Slack from '@icons/Slack'
import Snapchat from '@icons/Snapchat'
import Spotify from '@icons/Spotify'
import StackExchange from '@icons/StackExchange'
import StackOverflow from '@icons/StackOverflow'
import Strava from '@icons/Strava'
import Telegram from '@icons/Telegram'
import Twitch from '@icons/Twitch'
import Twitter from '@icons/Twitter'
import Whatsapp from '@icons/Whatsapp'
import XTwitter from '@icons/XTwitter'
import Xing from '@icons/Xing'
import Youtube from '@icons/Youtube'

/**
 * @constant NETWORKS
 */
const NETWORKS: Networks = {
	bitbucket: [
		'Bitbucket',
		(className?: string) => <Bitbucket class={className} />,
	],
	discord: [
		'Discord',
		(className?: string) => <Discord class={className} />,
	],
	codepen: [
		'CodePen',
		(className?: string) => <Codepen class={className} />,
	],
	facebook: [
		'Facebook',
		(className?: string) => <Facebook class={className} />,
	],
	github: [
		'GitHub',
		(className?: string) => <Github class={className} />,
	],
	gitlab: [
		'GitLab',
		(className?: string) => <Gitlab class={className} />,
	],
	instagram: [
		'Instagram',
		(className?: string) => <Instagram class={className} />,
	],
	linkedin: [
		'LinkedIn',
		(className?: string) => <Linkedin class={className} />,
	],
	mastodon: [
		'Mastodon',
		(className?: string) => <Mastodon class={className} />,
	],
	medium: [
		'Medium',
		(className?: string) => <Medium class={className} />,
	],
	messenger: [
		'Messenger',
		(className?: string) => <FacebookMessenger class={className} />,
	],
	patreon: [
		`Patreon`,
		(className?: string) => <Patreon class={className} />,
	],
	pinterest: [
		`Pinterest`,
		(className?: string) => <Pinterest class={className} />,
	],
	quora: [
		`Quora`,
		(className?: string) => <Quora class={className} />,
	],
	reddit: [
		'Reddit',
		(className?: string) => <Reddit class={className} />,
	],
	slack: [
		'Slack',
		(className?: string) => <Slack class={className} />,
	],
	snapchat: [
		'Snapchat',
		(className?: string) => <Snapchat class={className} />,
	],
	spotify: [
		'Spotify',
		(className?: string) => <Spotify class={className} />,
	],
	stackExchange: [
		'Stack Exchange',
		(className?: string) => <StackExchange class={className} />,
	],
	stackOverflow: [
		'Stack Overflow',
		(className?: string) => <StackOverflow class={className} />,
	],
	strava: [
		'Strava',
		(className?: string) => <Strava class={className} />,
	],
	telegram: [
		'Telegram',
		(className?: string) => <Telegram class={className} />,
	],
	twitch: [
		'Twitch',
		(className?: string) => <Twitch class={className} />,
	],
	twitter: [
		'Twitter',
		(className?: string) => <Twitter class={className} />,
	],
	whatsapp: [
		'WhatsApp',
		(className?: string) => <Whatsapp class={className} />,
	],
	x: [
		'X',
		(className?: string) => <XTwitter class={className} />,
	],
	xing: [
		'Xing',
		(className?: string) => <Xing class={className} />,
	],
	youtube: [
		'YouTube',
		(className?: string) => <Youtube class={className} />,
	],
}
export default NETWORKS
