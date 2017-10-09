/* @flow */
import React, { Component } from 'react'
import StyleSheet, { TextInput } from 'react-native'

export default class FormInput extends Component {
  render() {
    return <TextInput style={styles.formInput} placeholderTextColor="" {...this.props} />
  }
}
const styles = StyleSheet.create({
  formInput: {},
})
