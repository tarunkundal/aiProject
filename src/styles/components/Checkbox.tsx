import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { BorderColor } from '../tokens/colors/border'
import { DefaultColor } from '../tokens/colors/default'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

export const checkboxTheme = defineMultiStyleConfig({
	baseStyle: () => ({
		control: {
			bg: DefaultColor.white,
			borderRadius: '4px',

			border: '1px solid',
			borderColor: BorderColor.primary,

			_indeterminate: {
				bg: DefaultColor.brand,
				borderColor: 'transparent',
				_hover: {
					bg: DefaultColor.brand,
				},
			},

			_checked: {
				bg: DefaultColor.brand,
				borderColor: 'transparent',
				_hover: {
					bg: DefaultColor.brand,
					borderColor: 'transparent',
				},

				_focus: {
					boxShadow: 'none',
					outline: 'none',
				},
			},
		},
	}),
	defaultProps: {
		size: 'lg',
	},
})
