import { sliderAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { DefaultColor } from '../tokens/colors/default'

const helpers = createMultiStyleConfigHelpers(sliderAnatomy.keys)

export const sliderTheme = helpers.defineMultiStyleConfig({
	baseStyle: {
		filledTrack: {
			bg: DefaultColor.brand,
		},
	},
})
