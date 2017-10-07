import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BorderBaseStyle, Metrics } from '../utils'

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
