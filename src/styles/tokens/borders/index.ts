import { COLORS } from '../colors/constant'

export enum Border {
	primary = 'primary',
	error = 'error',
}

export const borders = {
	primary: {
		default: `1px solid ${COLORS.BlackGrey[500]}`,
	},
	error: {
		default: `1px solid ${COLORS.Red[100]}`,
	},
}
