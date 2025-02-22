import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum IconColor {
	primary = 'icon.primary',
	secondary = 'icon.secondary',
	hover_primary = 'icon.hover_primary',
	active_primary = 'icon.active_primary',
}

export const iconColorSemanticTokens: Record<keyof typeof IconColor, SemanticTokenValue> = {
	primary: {
		default: COLORS.BrandGrey[600],
	},
	secondary: {
		default: COLORS.BrandGrey[400],
	},
	hover_primary: {
		default: COLORS.BrandGrey[50],
	},
	active_primary: {
		default: COLORS.BrandGrey[900],
	},
}
