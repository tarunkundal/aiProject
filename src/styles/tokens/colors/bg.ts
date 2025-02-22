import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'
import { DefaultColor } from './default'

export enum BgColor {
	'primary' = 'bg.primary',
	'secondary' = 'bg.secondary',
	'hover_primary' = 'bg.hover_primary',
	'active_primary' = 'bg.active_primary',
	'error' = 'bg.error',
	'logo' = 'bg.logo',
	'highlight' = 'bg.highlight',
	'input' = 'bg.input',
	'danger' = 'bg.danger',
	'slider_track' = 'bg.slider_track',
}

export const bgColorSemanticTokens: Record<keyof typeof BgColor, SemanticTokenValue> = {
	primary: {
		default: DefaultColor.white,
	},
	secondary: {
		default: COLORS.BlackGrey[100],
	},
	hover_primary: {
		default: COLORS.BlackGrey[100],
	},
	active_primary: {
		default: COLORS.BrandGrey[50],
	},
	error: {
		default: COLORS.Red[50],
	},
	logo: {
		default: COLORS.BlackGrey[100],
	},
	highlight: {
		default: COLORS.Brand[600],
	},
	input: {
		default: COLORS.BlackGrey[50],
	},
	danger: {
		default: COLORS.Red[400],
	},
	slider_track: {
		default: COLORS.BrandGrey[100],
	},
}
