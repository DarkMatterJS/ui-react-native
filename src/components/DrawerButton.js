import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { BasicColors, FontBaseStyle } from '../theme'
import { Metrics } from '../utils'

export default class DrawerButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.children ? (
          this.props.children
        ) : (
          <Text style={styles.text}>{this.props.text}</Text>
        )}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    ...FontBaseStyle,
    color: BasicColors.white,
    marginVertical: Metrics.baseMargin,
  },
})
