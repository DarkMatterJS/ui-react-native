import React, { Component } from 'react'
import { FlatList as RNFlatList, StyleSheet } from 'react-native'
import ListSeparator from './ListSeparator'
import ListRow from './ListRow'

export default class FlatList extends Component {
  static defaultProps = {
    data: [],
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({ item }) => {
    return <ListRow onPressItem={this.props.onPressItem} title={item.title} item={item} />
  }

  render() {
    return (
      <RNFlatList
        ItemSeparatorComponent={({ highlighted }) => <ListSeparator highlighted={highlighted} />}
        style={styles.screen}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})
