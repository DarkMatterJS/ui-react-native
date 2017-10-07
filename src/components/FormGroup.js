import React from 'react'
import StyleSheet, { View } from 'react-native'
import { Spacing } from '../utils'

const FormGroup = props => (
  <View style={styles.container}>{props.children}</View>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    marginVertical: Spacing.regular,
    overflow: 'hidden',
  },
})

export default FormGroup
