import { BasicColors, GreyColors, ColorUtils } from './Colors'
import Metrics from './Metrics'

const getBorderTypesFromColor = color => ({
  darkest: ColorUtils.getBrightestOpacityFromColor(color),
  darker: ColorUtils.getBrighterOpacityFromColor(color),
  dark: ColorUtils.getBrightOpacityFromColor(color),
  regular: ColorUtils.getMediumOpacityFromColor(color),
  light: ColorUtils.getLightOpacityFromColor(color),
  lighter: ColorUtils.getLighterOpacityFromColor(color),
  lightest: ColorUtils.getLightestOpacityFromColor(color),
})

export const BorderColors = {
  lightContent: getBorderTypesFromColor(BasicColors.white),
  darkContent: getBorderTypesFromColor(BasicColors.black),
  lightTheme: getBorderTypesFromColor(GreyColors.regular),
  darkTheme: getBorderTypesFromColor(GreyColors.regular),
  default: this.lightTheme,
}

export const BorderBaseStyle = {
  borderWidth: Metrics.borderWidth,
  borderColor: BorderColors.regular,
  borderStyle: 'solid',
}

export const BorderSizes = {}
