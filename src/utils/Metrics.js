import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native'
import { Spacing, CornerRadiusSizes } from './Sizes'

const { width, height } = Dimensions.get('window')

const pixelRatio = PixelRatio.get()

const Metrics = {
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'andriod',
  baseRem: 16,
  baseMargin: Spacing.regular,
  doubleBaseMargin: Spacing.medium,
  baseCornerRadius: CornerRadiusSizes.regular,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 56,
  pixelRatio: PixelRatio.get(),
  hairlineWidth: StyleSheet.hairlineWidth,
  borderWidth: 0.5 * pixelRatio,
}

export default Metrics
