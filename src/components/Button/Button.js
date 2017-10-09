import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Theme from '../../theme'

export default class Button extends Component {
  render() {
    let state = (this.props.primary && 'primary') || (this.props.secondary && 'secondary')

    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.base.container, styles[state].container, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.base.text, styles[state].text, this.props.textStyle]}>
          {this.props.label || this.props.children || ''}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...Theme.text,
      textAlign: 'center',
    },
  },
  primary: {
    container: {},
    text: {},
  },
  secondary: {
    container: {},
    text: {},
  },
})
