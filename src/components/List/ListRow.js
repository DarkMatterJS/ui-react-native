import React, { Component } from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ListRow extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.item)
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.tableRow}
        onPress={this._onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <Text style={styles.tableLabel}>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  tableRow: {},
  tableLabel: {},
})
