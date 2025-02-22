import { defineStyleConfig } from '@chakra-ui/react'

import { COLORS } from '../tokens/colors/constant'

export const spinnerTheme = defineStyleConfig({
	baseStyle: {
		thickness: '4px',
		speed: '5s',
		emptyColor: COLORS.BrandGrey[200],
		color: COLORS.Brand[400],
		size: 'xl',
	},

	variants: {
		primary: {
			color: COLORS.Brand[500],
			thickness: '4px',
			speed: '5s',
			emptyColor: COLORS.BrandGrey[200],
			size: 'xl',
		},
	},

	defaultProps: {
		variant: 'primary',
		size: 'md',
	},
})
