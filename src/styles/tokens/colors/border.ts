import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum BorderColor {
	'primary' = 'border.primary',
	'secondary' = 'border.secondary',
	'active' = 'border.active',
	'error' = 'border.error',
	'hover' = 'border.hover',
}

export const borderColorSemanticTokens: Record<keyof typeof BorderColor, SemanticTokenValue> = {
	primary: {
		default: COLORS.BlackGrey[500],
	},
	secondary: {
		default: COLORS.BlackGrey[600],
	},
	active: {
		default: COLORS.BlackGrey[900],
	},
	error: {
		default: COLORS.Red[100],
	},
	hover: {
		default: COLORS.BlackGrey[600],
	},
}
