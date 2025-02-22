import { BgColor } from './tokens/colors/bg'
import { COLORS } from './tokens/colors/constant'
import { DefaultColor } from './tokens/colors/default'
import { TextColor } from './tokens/colors/text'

const styles = {
	global: () => ({
		'*': {
			boxSizing: 'border-box',
		},
		'html, body': {
			width: '100%',
			height: '100%',
			fontFamily: 'Inter, sans-serif',
			bg: BgColor.primary,
			color: TextColor.primary,
			margin: 0,
			padding: 0,
			fontSize: '14px',
		},

		'*::selection': {
			backgroundColor: COLORS.Yellow[800],
			fontWeight: '500',
			color: DefaultColor.white,
		},
	}),
}

export default styles
