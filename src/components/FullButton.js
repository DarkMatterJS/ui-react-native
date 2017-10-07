import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
})

export default class FullButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}
