/* @flow */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Spacing, Metrics } from '../utils'

const FormGroup = props => (
  <View style={styles.container}>{props.children}</View>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: Metrics.baseCornerRadius,
    marginVertical: Spacing.regular,
    overflow: 'hidden',
  },
})

export default FormGroup
