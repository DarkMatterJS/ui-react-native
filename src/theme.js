import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native'
import _ from 'lodash'
import { BasicColors, GreyColors, BrightColors, ColorUtils } from './colors'
import { createFontSizeFromScale, createVariations } from './addons'

const window = Dimensions.get('window')

const { width, height } = window

const sizeVariants = ['', 'top', 'right', 'bottom', 'left', 'horizontal', 'vertical']

// const STATUS_BAR_OFFSET = Platform.OS === 'android' ? -StatusBar.currentConfig : 0
// const NAVIGATION_BAR_HEIGHT = NavigationExperimental.Header.HEIGHT

export const ThemeUtils = {
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'andriod',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  pixelRatio: PixelRatio.get(),
  hairlineWidth: StyleSheet.hairlineWidth,
}

const defaultTheme = {
  // Use Rounded Corners?
  useRoundedCorners: true,

  // Border Radius Sizes
  borderRadiusSizeTiny: 2,
  borderRadiusSizeSmall: 4,
  borderRadiusSizeRegular: 6,
  borderRadiusSizeMedium: 12,
  borderRadiusSizeLarge: 20,
  borderRadiusSizeHuge: 32,

  // Gutters Sizes
  gutterSizeMicro: 4,
  gutterSizeTiny: 8,
  gutterSizeSmall: 12,
  gutterSizeRegular: 16,
  gutterSizeMedium: 20,
  gutterSizeLarge: 24,

  // Avatar Sizes
  avatarSizeMicro: 16,
  avatarSizeTiny: 24,
  avatarSizeSmall: 32,
  avatarSizeRegular: 40,
  avatarSizeMedium: 56,
  avatarSizeLarge: 72,
  avatarSizeHuge: 128,

  // Row Height Sizes
  rowHeightTiny: 24,
  rowHeightSmall: 32,
  rowHeightRegular: 44,
  rowHeightMedium: 47,
  rowHeightLarge: 50,
  rowHeightHuge: 60,

  // Font Sizes
  fontSizeAtomic: createFontSizeFromScale(-5),
  fontSizeMicro: createFontSizeFromScale(-4),
  fontSizeTiny: createFontSizeFromScale(-3),
  fontSizeSmall: createFontSizeFromScale(-2),
  fontSizeReduced: createFontSizeFromScale(-1),
  fontSizeRegular: createFontSizeFromScale(0),
  fontSizeIncreased: createFontSizeFromScale(1),
  fontSizeMedium: createFontSizeFromScale(2),
  fontSizeLarge: createFontSizeFromScale(3),
  fontSizeHuge: createFontSizeFromScale(4),
  fontSizeGiant: createFontSizeFromScale(5),

  // Font Family Weights
  fontFamilyWeightLightest: 'SourceSansPro-ExtraLight',
  fontFamilyWeightLighter: 'SourceSansPro-Light',
  fontFamilyWeightLight: 'SourceSansPro-Light',
  fontFamilyWeightSemiLight: 'SourceSansPro-Regular',
  fontFamilyWeightRegular: 'SourceSansPro-Regular',
  fontFamilyWeightSemiBold: 'SourceSansPro-SemiBold',
  fontFamilyWeightBold: 'SourceSansPro-Bold',
  fontFamilyWeightBolder: 'SourceSansPro-Bold',
  fontFamilyWeightBoldest: 'SourceSansPro-Black',

  // Navbar
  navBarHeight: Platform.OS === 'ios' ? 64 : 56,

  // Colors
  primaryColor: GreyColors.regular,
  secondaryColor: GreyColors.light,
  accentColor: BrightColors.purple,
  successColor: BrightColors.green,
  dangerColor: BrightColors.red,
  warningColor: BrightColors.yellow,
  infoColor: BrightColors.blue,
  linkColor: BrightColors.deepBlue,

  // Text Colors
  textColorRegular: GreyColors.dark,
  textColorSecondary: GreyColors.semiDark,

  // Material Colors
  backgroundColor: GreyColors.lightest,
  paperColor: BasicColors.white,
  shadowColor: ColorUtils.changeColorAlpha(BasicColors.black, 0.1),

  // Typography Styles
  text: {
    fontFamily: this.fontFamilyWeightRegular,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: this.fontSizeRegular,
    color: this.textColorRegular,
  },

  heading: {
    ...this.text,
    fontSize: this.fontSizeLarge,
  },

  title: {
    ...this.text,
  },

  subtitle: {
    ...this.text,
    color: this.textColorSecondary,
  },

  caption: {
    ...this.text,
    fontSize: this.fontSizeSmall,
    color: this.textColorSecondary,
  },

  paragraph: {
    ...this.baseText,
    fontSize: this.fontSizeIncreased,
  },

  // Borders
  border: {
    borderWidth: 0.5 * ThemeUtils.pixelRatio,
    borderColor: GreyColors.light,
    borderStyle: 'solid',
  },

  // Overlays
  imageOverlayColor: ColorUtils.changeColorAlpha(BasicColors.black, 0.2),
  imageOverlayTextColor: BasicColors.white,
  tagOverlayColor: ColorUtils.changeColorAlpha(BasicColors.black, 0.7),
  tagOverlayTextColor: BasicColors.white,

  // Navigation Bar
  navBarBackground: BasicColors.white,
  navBarBorderColor: ColorUtils.changeColorAlpha(BasicColors.black, 0.1),
  navBarText: {
    ...this.text,
  },
  navBarIconColor: this.accentColor,

  featuredNavBarTitleColor: BasicColors.white,
  featuredNavBarIconsColor: BasicColors.white,

  // Navigation
  mainNavBackground: BasicColors.white,
  mainNavItemColor: ColorUtils.changeColorAlpha(GreyColors.regular, 0.4),
  mainNavItemBackground: BasicColors.black,
  mainNavSelectedItemBackground: BasicColors.black,
  mainNavSelectedItemColor: GreyColors.darkest,
  mainNavSelectedItemBorderColor: this.infoColor,
  mainNavBorderColor: GreyColors.semiDark,

  subNavItemColor: GreyColors.darkest,
  subNavItemBackground: BasicColors.black,
  subNavListBorderColor: GreyColors.semiDark,

  // Buttons
  primaryButtonText: {
    ...this.text,
    fontFamily: this.fontFamilyWeightBold,
    fontSize: this.fontSizeSmall,
    color: GreyColors.darkest,
  },
  primaryButtonBackgroundColor: BasicColors.white,
  primaryButtonBorderColor: BasicColors.white,
  secondaryButtonTextColor: BasicColors.white,
  secondaryButtonBackgroundColor: GreyColors.darkest,
  secondaryButtonBorderColor: GreyColors.darkest,

  // Icons
  iconColor: GreyColors.regular,

  iconSizeMicro: 12,
  iconSizeTiny: 16,
  iconSizeSmall: 20,
  iconSizeRegular: 24,
  iconSizeMedium: 28,
  iconSizeLarge: 32,

  // Separator
  separatorColor: GreyColors.regular,

  // Section Header
  sectionHeaderBackgroundColor: 'transparent',

  // Indicator
  indicatorColor: BrightColors.pink,
}

export default (variables = defaultTheme) => {
  const themeVars = _.merge(variables, defaultTheme)

  const styles = {
    gutterPadding: {
      ...createVariations('micro', sizeVariants, 'padding', themeVars.gutterSizeMicro),
      ...createVariations('tiny', sizeVariants, 'padding', themeVars.gutterSizeTiny),
      ...createVariations('small', sizeVariants, 'padding', themeVars.gutterSizeSmall),
      ...createVariations('regular', sizeVariants, 'padding', themeVars.gutterSizeRegular),
      ...createVariations('medium', sizeVariants, 'padding', themeVars.gutterSizeMedium),
      ...createVariations('large', sizeVariants, 'padding', themeVars.gutterSizeLarge),
    },

    guttersMargin: {
      ...createVariations('micro', sizeVariants, 'margin', themeVars.gutterSizeMicro),
      ...createVariations('tiny', sizeVariants, 'margin', themeVars.gutterSizeTiny),
      ...createVariations('small', sizeVariants, 'margin', themeVars.gutterSizeSmall),
      ...createVariations('regular', sizeVariants, 'margin', themeVars.gutterSizeRegular),
      ...createVariations('medium', sizeVariants, 'margin', themeVars.gutterSizeMedium),
      ...createVariations('large', sizeVariants, 'margin', themeVars.gutterSizeLarge),
    },
  }

  return styles
}
