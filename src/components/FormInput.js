/* @flow */
import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Spacing, GreyColors } from '../utils'

const styles = StyleSheet.create({
  formInput: {
    paddingHorizontal: Spacing.regular,
    paddingVertical: Spacing.small,
    // minHeight: Metrics.row,
    justifyContent: 'center',
    lineHeight: 25,
  },
})

export default class FormInput extends Component {
  render() {
    return (
      <TextInput
        style={styles.formInput}
        placeholderTextColor={GreyColors.regular}
        {...this.props}
      />
    )
  }
}
