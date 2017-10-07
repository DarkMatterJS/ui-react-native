import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BorderBaseStyle } from '../utils'

const FormSeparator = () => {
  return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
  seperator: BorderBaseStyle,
})

export default FormSeparator
