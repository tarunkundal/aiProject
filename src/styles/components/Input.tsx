import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { BgColor } from '../tokens/colors/bg'
import { BorderColor } from '../tokens/colors/border'
import { TextColor } from '../tokens/colors/text'
import { SHADOWS } from '../tokens/shadows'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

export enum InputVariant {
	primary = 'primary',
}

export const inputTheme = defineMultiStyleConfig({
	baseStyle: {
		field: {
			fontSize: '14px',
			borderRadius: '6px',
			border: '1px solid',
			fontWeight: 500,
			color: TextColor.primary,
			borderColor: BorderColor.primary,
			_placeholder: {
				fontWeight: 500,
				color: TextColor.placeholder,
			},
			_hover: {
				borderColor: BorderColor.hover,
			},
			_focus: {
				borderColor: 'transparent',
				boxShadow: SHADOWS.focused,
			},
		},
	},
	sizes: {
		sm: {
			field: {
				height: '32px',
				px: '12px',
			},
		},
		md: {
			field: {
				height: '36px',
				px: '12px',
			},
		},
	},
	variants: {
		[InputVariant.primary]: {
			field: {
				bg: BgColor.input,
			},
		},
	},
	defaultProps: {
		variant: InputVariant.primary,
		size: 'md',
	},
})
