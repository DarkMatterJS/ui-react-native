import React from 'react'
import { View, StyleSheet } from 'react-native'

const FormSeparator = () => {
  return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
  seperator: {
    border: '1px solid black',
  },
})

export default FormSeparator
