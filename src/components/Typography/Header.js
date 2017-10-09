/* @flow */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => (
  <View style={styles.container}>
    <Text>MyComponent component</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Header
