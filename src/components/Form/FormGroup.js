import React from 'react'
import StyleSheet, { View } from 'react-native'

const FormGroup = props => <View style={styles.container}>{props.children}</View>

const styles = StyleSheet.create({
  container: {},
})

export default FormGroup
