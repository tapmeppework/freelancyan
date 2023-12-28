import {
	createContext as _createContext,
	//mergeProps,
	onMount,
} from 'solid-js'
import type {
	JSX,
	ParentProps,
} from 'solid-js'

export type Component<P extends Properties = Properties> = (properties: P) => Snippet

/**
 * @see https://docs.solidjs.com/references/api-reference/component-apis/createContext
 */
export const createContext = _createContext

/**
 * @source C:/Program Files/Microsoft VS Code/resources/app/extensions/node_modules/typescript/lib/lib.dom.d.ts
 */
export type EventKeyboard = KeyboardEvent

export type HTMLAttributesABCD = JSX.HTMLAttributes<HTMLElement>
export type HTMLAttributesAnchor = JSX.AnchorHTMLAttributes<HTMLAnchorElement>
export type HTMLAttributesButton = JSX.ButtonHTMLAttributes<HTMLButtonElement>
export type HTMLAttributesDiv = JSX.HTMLAttributes<HTMLElementDiv>
export type HTMLAttributesForm = JSX.FormHTMLAttributes<HTMLFormElement>
export type HTMLAttributesImage = JSX.ImgHTMLAttributes<HTMLImageElement>
export type HTMLAttributesInput = JSX.InputHTMLAttributes<HTMLInputElement>
// ---
export type HTMLElementABCD = HTMLElement
export type HTMLElementAnchor = HTMLAnchorElement
export type HTMLElementButton = HTMLButtonElement
export type HTMLElementDiv = HTMLDivElement
export type HTMLElementHeading = HTMLHeadingElement
export type HTMLElementForm = HTMLFormElement
export type HTMLElementImage = HTMLImageElement
export type HTMLElementInput = HTMLInputElement

export function map<Child = Snippet>(properties: Properties, mapper: (child: Child, index: number) => Snippet): Snippet {
	const _children = Array.isArray(properties.children) ? properties.children : [properties.children]
	return _children.map(
		(child, index) => mapper(child as unknown as Child, index)
	)
}

export const onReady = onMount //https://www.solidjs.com/docs/latest/api#onmount

export type Properties = ParentProps

export type Snippet = JSX.Element

export type Style = Object
