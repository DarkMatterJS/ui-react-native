import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Metrics } from '../utils'
import { BorderBaseStyle } from '../theme'

const ListSeperator = ({ highlighted }) =>
  Metrics.isiOS && (
    <View style={[styles.seperator, highlighted && { marginLeft: 0 }]} />
  )

const styles = StyleSheet.create({
  seperator: {
    borderBottomWidth: BorderBaseStyle.borderWidth,
    borderBottomColor: BorderBaseStyle.borderColor,
    borderBottomStyle: BorderBaseStyle.borderStyle,
  },
})

export default ListSeperator
