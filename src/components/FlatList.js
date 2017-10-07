import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListSeperator from './ListSeperator'
import ListRow from './ListRow'
import { SharedStyles } from '../theme'

export default class FList extends Component {
  static defaultProps = {
    data: [],
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({ item }) => {
    return (
      <ListRow
        onPressItem={this.props.onPressItem}
        title={item.title}
        item={item}
      />
    )
  }

  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({ highlighted }) => (
          <ListSeperator highlighted={highlighted} />
        )}
        style={styles.screen}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...SharedStyles.screen,
  },
})
