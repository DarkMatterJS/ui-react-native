import { BasicColors, GreyColors, ColorUtils } from './Colors'
import ScaleMethods from './ScaleMethods'
import Metrics from './Metrics'

/* -- Auto Scaling Typography -- */
const ScaleMethod = ScaleMethods.perfectFourth

const getSizeFromScale = factor =>
  Metrics.baseRem * Math.pow(ScaleMethod, factor)

export const SizesMap = {
  0: getSizeFromScale(-5),
  1: getSizeFromScale(-4),
  2: getSizeFromScale(-3),
  3: getSizeFromScale(-2),
  4: getSizeFromScale(-1),
  5: getSizeFromScale(0),
  6: getSizeFromScale(1),
  7: getSizeFromScale(2),
  8: getSizeFromScale(3),
  9: getSizeFromScale(4),
  10: getSizeFromScale(5),
}

export const FontSizes = {
  atomic: SizesMap[0],
  micro: SizesMap[1],
  tiny: SizesMap[2],
  small: SizesMap[3],
  reduced: SizesMap[4],
  regular: SizesMap[5],
  increased: SizesMap[6],
  medium: SizesMap[7],
  large: SizesMap[8],
  huge: SizesMap[9],
  giant: SizesMap[10],
}

export const FontFamilyMap = {
  0: 'SourceSansPro-ExtraLight',
  1: 'SourceSansPro-Light',
  2: 'SourceSansPro-Light',
  3: 'SourceSansPro-Regular',
  4: 'SourceSansPro-Regular',
  5: 'SourceSansPro-SemiBold',
  6: 'SourceSansPro-Bold',
  7: 'SourceSansPro-Bold',
  8: 'SourceSansPro-Black',
}

export const FontWeights = {
  lightest: FontFamilyMap[0],
  lighter: FontFamilyMap[1],
  light: FontFamilyMap[2],
  semiLight: FontFamilyMap[3],
  regular: FontFamilyMap[4],
  semiBold: FontFamilyMap[5],
  bold: FontFamilyMap[6],
  bolder: FontFamilyMap[7],
  boldest: FontFamilyMap[8],
}

export const TextColors = {
  lightContent: {
    darkOpacity: ColorUtils.getDarkOpacityFromColor(BasicColors.White),
    mediumOpacity: ColorUtils.getMediumOpacityFromColor(BasicColors.White),
    lightOpacity: ColorUtils.getLightOpacityFromColor(BasicColors.White),
  },
  darkContent: {
    darkOpacity: ColorUtils.getDarkOpacityFromColor(BasicColors.Black),
    mediumOpacity: ColorUtils.getMediumOpacityFromColor(BasicColors.Black),
    lightOpacity: ColorUtils.getLightOpacityFromColor(BasicColors.Black),
  },
  lightTheme: {
    regular: GreyColors.getFromScale(0),
    lighter: GreyColors.getFromScale(1),
    semiLight: GreyColors.getFromScale(2),
    mediumLight: GreyColors.getFromScale(3),
    light: GreyColors.getFromScale(4),
    veryLight: GreyColors.getFromScale(5),
    lightest: GreyColors.getFromScale(6),
  },
  darkTheme: {
    regular: GreyColors.getFromScale(0),
    lighter: GreyColors.getFromScale(-1),
    semiLight: GreyColors.getFromScale(-2),
    mediumLight: GreyColors.getFromScale(-3),
    light: GreyColors.getFromScale(-4),
    veryLight: GreyColors.getFromScale(-5),
    lightest: GreyColors.getFromScale(-6),
  },
  default: this.lightTheme,
}

export const FontBaseStyle = {
  fontFamily: FontWeights.regular,
  fontSize: FontSizes.regular,
  color: TextColors.regular,
}

export default {
  baseStyle: FontBaseStyle,
  weights: FontWeights,
  sizes: FontSizes,
  colors: TextColors,
}
