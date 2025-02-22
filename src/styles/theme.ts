import { extendTheme } from '@chakra-ui/react'

import { avatarTheme } from './components/Avatar'
import { badgeTheme } from './components/Badge'
import { buttonTheme } from './components/Button'
import { checkboxTheme } from './components/Checkbox'
import { inputTheme } from './components/Input'
import { menuTheme } from './components/Menu'
import { modalTheme } from './components/Modal'
import { radioTheme } from './components/Radio'
import { sliderTheme } from './components/Slider'
import { spinnerTheme } from './components/Spinner'
import { switchTheme } from './components/Switch'
import { textTheme } from './components/Text'
import styles from './global'
import { borders } from './tokens/borders'
import { colors } from './tokens/colors'
import { COLORS } from './tokens/colors/constant'
import { FONT_SIZE, FONT_WEIGHT } from './tokens/typography'

const theme = {
	config: {
		initialColorMode: 'light',
	},
	semanticTokens: {
		colors: colors,
		borders: borders,
	},
	components: {
		Button: buttonTheme,
		Text: textTheme,
		Avatar: avatarTheme,
		Menu: menuTheme,
		Modal: modalTheme,
		Checkbox: checkboxTheme,
		Switch: switchTheme,
		Radio: radioTheme,
		Input: inputTheme,
		Spinner: spinnerTheme,
		Badge: badgeTheme,
		Slider: sliderTheme,
	},
	colors: COLORS,
	fontSizes: FONT_SIZE,
	fontWeights: FONT_WEIGHT,
	styles,
}

export const customTheme = extendTheme({ ...theme })
