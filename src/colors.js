import Color from 'color'

export const BasicColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
}

/* -- REGULAR COLORS -- */

const ColorHues = {
  orangeRed: 355, // '#f53d4c',
  deepPink: 340, // '#f53d7a',
  pink: 325, // '#f53da8',
  brightPink: 310, // '#f53dd6',
  neonPink: 295, // '#e63df5',
  lightPurple: 280, // '#b83df5',
  purple: 265, // '#8a3df5',
  deepPurple: 250, // '#5c3df5',
  deepBlue: 235, // '#3d4df5',
  blue: 220, // '#3d7af5',
  lightBlue: 205, // '#3da8f5',
  deepCyan: 190, // '#3dd6f5',
  cyan: 175, // '#3df5e5',
  teal: 160, // '#3df5b8',
  deepTeal: 145, // '#3df58a',
  deepGreen: 130, // '#3df55c',
  green: 115, // '#4cf53d',
  neonGreen: 100, // '#7af53d',
  lime: 85, // '#a8f53d',
  lightYellow: 70, // '#d6f53d',
  deepYellow: 55, // '#f5e53d',
  lightOrange: 40, // '#f5b83d',
  orange: 25, // '#f58a3d',
  amber: 10, // '#f55c3d',
  red: 0, // '#f53d3d',
}

/* -- GREY COLORS -- */
export const GreyColorsIndex = {
  0: { h: 240, s: 0.19, l: 0.97 }, // #F7F7F9
  1: { h: 222, s: 0.13, l: 0.89 }, // #E2E4E9
  2: { h: 220, s: 0.13, l: 0.82 }, // #CDD1D9
  3: { h: 217, s: 0.12, l: 0.75 }, // #B9BFC9
  4: { h: 217, s: 0.13, l: 0.68 }, // #A4ACB9
  5: { h: 217, s: 0.13, l: 0.61 }, // #8F99A9
  6: { h: 216, s: 0.13, l: 0.53 }, // #7A8699
  7: { h: 216, s: 0.11, l: 0.46 }, // #697383
  8: { h: 217, s: 0.1, l: 0.38 }, // #58606D
  9: { h: 222, s: 0.1, l: 0.31 }, // #484D59
  10: { h: 227, s: 0.11, l: 0.23 }, // #363943
  11: { h: 232, s: 0.09, l: 0.16 }, // #26272E
  12: { h: 250, s: 0.13, l: 0.09 }, // #151419
}

const GreyMiddleIndex = 6

export const GreyColors = {
  getFromScale: factor => GreyColorsIndex[factor + GreyMiddleIndex],
  lightest: this.getFromScale(-6),
  veryLight: this.getFromScale(-5),
  light: this.getFromScale(-4),
  mediumLight: this.getFromScale(-3),
  semiLight: this.getFromScale(-2),
  lighter: this.getFromScale(-1),
  regular: this.getFromScale(0),
  darker: this.getFromScale(1),
  semiDark: this.getFromScale(2),
  mediumDark: this.getFromScale(3),
  dark: this.getFromScale(4),
  veryDark: this.getFromScale(5),
  darkest: this.getFromScale(6),
}

export const GrayColors = GreyColors

const SaturationScale = {
  light: 1.0,
  bright: 0.85,
  medium: 1.0,
  dark: 1.0,
}

const LightnessScale = {
  light: 0.55,
  bright: 0.5,
  medium: 0.45,
  dark: 0.4,
}

const getHSLStringFromObject = ({ h, s, l }) => `hsl(${h},${s * 100}%,${l * 100}%)`

// ColorPalettes
export let LightColors = {}
export let BrightColors = {}
export let MediumColors = {}
export let DarkColors = {}

Object.keys(ColorHues).forEach(key => {
  LightColors[key] = getHSLStringFromObject({
    h: ColorHues[key],
    s: SaturationScale.light,
    l: LightnessScale.light,
  })
})

Object.keys(ColorHues).forEach(key => {
  BrightColors[key] = getHSLStringFromObject({
    h: ColorHues[key],
    s: SaturationScale.bright,
    l: LightnessScale.bright,
  })
})

Object.keys(ColorHues).forEach(key => {
  MediumColors[key] = getHSLStringFromObject({
    h: ColorHues[key],
    s: SaturationScale.medium,
    l: LightnessScale.medium,
  })
})

Object.keys(ColorHues).forEach(key => {
  DarkColors[key] = getHSLStringFromObject({
    h: ColorHues[key],
    s: SaturationScale.dark,
    l: LightnessScale.dark,
  })
})

export const ColorUtils = {
  changeColorAlpha: (hex, opacity) => Color(hex).alpha(opacity),
}
