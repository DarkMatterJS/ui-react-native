import React from 'react'
import { View, StyleSheet } from 'react-native'
import Metrics from '../metrics'
import { BorderBaseStyle } from '../borders'

const ListSeperator = ({ highlighted }) =>
  Metrics.isiOS && <View style={[styles.seperator, highlighted && { marginLeft: 0 }]} />

const styles = StyleSheet.create({
  seperator: {
    borderBottomWidth: BorderBaseStyle.borderWidth,
    borderBottomColor: BorderBaseStyle.borderColor,
    borderBottomStyle: BorderBaseStyle.borderStyle,
  },
})

export default ListSeperator
