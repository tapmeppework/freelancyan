/// <reference types="astro/client" />
import type { _404, Binoolean, Contact, Grid, HeadlineMode, Metas, Scheme } from '@bloc/ABCD.types'

/**
 * @see @bloc/Config
 * @see https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
 */
interface ImportMeta {
	readonly env: {
		readonly _404: _404;
		readonly ASSETS: string;
		readonly CONTACT_BUSINESS: string;
		readonly CONTACT_NAME: string;
		readonly CONTACT_ADDRESS: string;
		readonly CONTACT_EMAIL: string;
		readonly CONTACT_PHONE: string;
		readonly CONTACT_SMS: string;
		readonly CONTACT_WHATSAPP: string;
		readonly FULL: Binoolean;
		readonly GRID: Grid;
		readonly HEADLINE_MODE: HeadlineMode;
		readonly LANGUAGE: string;
		readonly SCROLL: Binoolean;
		readonly SITE: string;
		readonly THEME_LAYOUT: Scheme.Layout;
		readonly THEME_COLORS_DARK_ABCD: string;
		readonly THEME_COLORS_DARK_RGB
		readonly THEME_COLORS_LIGHT_ABCD: string;
		readonly THEME_COLORS_LIGHT_RGB: string;
		readonly METAS_NAMES: StringJSON;
		readonly METAS_PROPERTIES: StringJSON;
	};
}