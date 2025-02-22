import { defineStyleConfig } from '@chakra-ui/react'

import { COLORS } from '../tokens/colors/constant'

export enum BadgeVariant {
	primary = 'primary',
}

export const badgeTheme = defineStyleConfig({
	baseStyle: {
		borderRadius: '4px',
	},
	variants: {
		[BadgeVariant.primary]: {
			border: '1px solid',
			borderColor: COLORS.Blue[200],
			bg: COLORS.Blue[100],
			color: COLORS.Blue[800],
		},
	},
	defaultProps: {
		variant: BadgeVariant.primary,
	},
})
