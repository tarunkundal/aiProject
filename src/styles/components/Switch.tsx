import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { DefaultColor } from '../tokens/colors/default'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(switchAnatomy.keys)

export const switchTheme = defineMultiStyleConfig({
	baseStyle: () => ({
		track: {
			_checked: {
				bg: DefaultColor.brand,
			},
		},
	}),
})
