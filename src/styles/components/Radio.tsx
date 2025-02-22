import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { BorderColor } from '../tokens/colors/border'
import { DefaultColor } from '../tokens/colors/default'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys)

export const radioTheme = defineMultiStyleConfig({
	baseStyle: () => ({
		control: {
			w: 5,
			h: 5,

			bg: DefaultColor.white,
			borderRadius: 'full',
			color: DefaultColor.brand,

			boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
			border: '1px solid',
			borderColor: BorderColor.primary,

			_hover: {
				borderColor: DefaultColor.brand,
				boxShadow: '0px 1px 4px rgba(34, 43, 72, 0.08)',
			},

			_focusVisible: {
				boxShadow: '0px 0px 0px 1px #FFFFFF, 0px 0px 0px 4px rgba(99, 99, 242, 0.32)',
				borderColor: DefaultColor.brand,
			},

			_checked: {
				bg: 'white',
				border: '2px solid',
				borderColor: DefaultColor.brand,
				color: DefaultColor.brand,
				innerWidth: '100%',
				innerHeight: '100%',

				_before: {
					height: '8px',
					width: '8px',
					borderRadius: 'full',
				},

				_hover: {
					bg: 'white',
					border: '2px solid',
					borderColor: DefaultColor.brand,
					color: DefaultColor.brand,
				},

				_focus: {
					bg: 'white',
					border: '2px solid',
					borderColor: DefaultColor.brand,
					color: DefaultColor.brand,
				},
			},
		},
	}),
})
