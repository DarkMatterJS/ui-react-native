/* @flow */
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const Link = props => (
  <TouchableOpacity {...props}>
    <Text style={[styles.text, props.textStyle]}>{props.text || props.children || ''}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
})

export default Link
