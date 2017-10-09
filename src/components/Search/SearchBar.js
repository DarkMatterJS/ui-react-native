import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SearchBar extends Component {
  render() {
    const { onSearch, onCancel, searchTerm } = this.props
    const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <View style={styles.mainContainer}>
        <Icon name="search" size={24} style={styles.searchIcon} />
        <TextInput
          autoFocus
          placeholder="Search"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.searchInput}
          value={this.props.searchTerm}
          onChangeText={onSearch}
          autoCapitalize="none"
          onSubmitEditing={onSubmitEditing}
          returnKeyType={'search'}
          autoCorrect={false}
          selectionColor="white"
        />
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.buttonLabel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 5,
    height: 40,
    alignSelf: 'center',

    textAlign: 'left',

    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 30,

    flexDirection: 'row',
  },
  searchIcon: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'white',
  },
})
