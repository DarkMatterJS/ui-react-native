import React, { Children } from 'react'
import PropTypes from 'prop-types'

export default class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    }
  }
  render() {
    return Children.only(this.props.children)
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object,
}
