import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class FullButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
})
