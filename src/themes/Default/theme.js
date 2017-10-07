import { StyleSheet, Platform } from 'react-native'
import { BrightColors, GreyColors, Spacing } from '../../utils'

const Colors = BrightColors

export const ColorScheme = {
  primary: Colors.deepPurple,
  secondary: Colors.lightBlue,
  disabled: GreyColors.regular,
  info: Colors.deepBlue,
  danger: Colors.red,
  warning: Colors.deepYellow,
  success: Colors.green,
  link: Colors.deepBlue,
}

export const SharedStyles = {
  underlayColor: 'rgba(0,0,0,0.1)',
}

export const ContainerStyles = {
  screen: {
    flex: 1,
    backgroundColor: Colors.base0,
    position: 'relative',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.base0,
    position: 'relative',
  },
}

export const NavigationStyles = {
  header: {
    backgroundColor: GreyColors.lightest,
  },
}

export const Theme = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.base0,
    position: 'relative',
  },

  scrollContainer: {
    flex: 1,
  },

  scrollViewContentContainer: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    padding: Spacing.regular,
  },

  centerContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerHorizontalContainer: {
    flex: 1,
    alignItems: 'center',
  },

  centerVerticalContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  centerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },

  blurContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },

  // Tables

  tableContainer: {
    flex: 1,
  },

  tableRow: {
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
    minHeight: Metrics.rowMinHeight,
    justifyContent: 'center',
  },

  tableRowTitle: {
    ...Fonts.style.tableLabel,
  },

  tableSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Borders.borderColor,
    ...Platform.select({
      ios: {
        marginLeft: Metrics.spacing.regular,
      },
    }),
  },

  tableGroup: {
    ...Borders.defaultStyle,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
    overflow: 'hidden',
  },

  tableGroupRow: {
    ...Borders.defaultStyle,
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  // Messages

  messageRow: {
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  messageRowText: {
    ...Fonts.style.body,
  },

  messageInputContainer: {
    backgroundColor: 'white',
    paddingHorizontal: Metrics.spacing.regular,
    paddingVertical: Metrics.spacing.small,
  },

  messageTextInputContainer: {},

  messageTextInput: {
    ...Fonts.style.body,
  },

  buttons: {
    base: {
      flex: 1,
      padding: Spacing.regular,
    },
    types: {
      default: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
      primary: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
      success: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
      warning: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
      error: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
      info: {
        backgroundColor: Colors.blue,
        color: Colors.white,
      },
    },
  },
}

export default Theme
