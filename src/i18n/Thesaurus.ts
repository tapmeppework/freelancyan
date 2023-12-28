import type { Anonymous } from '@bloc/ABCD.types'
import type { Snippet } from '@framework'
import Lexicon from './Lexicon'
import LexiconEN from './LexiconEN'
import LexiconDE from './LexiconDE'
import LexiconFR from './LexiconFR'

/**
 * @see https://docs.astro.build/en/recipes/i18n/
 */
export default class Thesaurus {
	readonly lexicons: Lexicon[] = this.getLexicons()
	readonly lexicon: Lexicon

	constructor(language: Anonymous<string>) {
		const lexicons = this.lexicons.filter(lexicon => lexicon.language == language)
		this.lexicon = lexicons[0] || this.lexicons[0]
	}

	readonly map = <Data = Snippet>(resolve: (lexicon: Lexicon) => Data): Data[] => this.lexicons
		.filter(lexicon => lexicon.language != this.lexicon.language)
		.map(resolve)

	/**
	 * @description 
	 * 	This method is used to list the available lexicons.
	 * 	It can and should be overridden to extend the list.
	 * @returns {Lexicon[]}
	 */
	protected getLexicons(): Lexicon[] {
		return [
			new LexiconEN,
			new LexiconDE,
			new LexiconFR,
		]
	}
}
