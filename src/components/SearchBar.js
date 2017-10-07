import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  FontSizes,
  FontWeights,
  TextColors,
  BrightColors,
  Metrics,
} from '../utils'

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 5,
    height: 40,
    alignSelf: 'center',
    padding: Metrics.small,
    textAlign: 'left',
    fontFamily: FontWeights.regular,
    fontSize: FontSizes.regular,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 30,
    color: TextColors.regular,
    flexDirection: 'row',
  },
  searchIcon: {
    left: Metrics.doubleBaseMargin,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.baseMargin,
  },
  buttonLabel: {
    color: 'white',
    fontFamily: FontWeights.regular,
    fontSize: FontSizes.regular,
  },
})

export default class SearchBar extends Component {
  render() {
    const { onSearch, onCancel, searchTerm } = this.props
    const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <View style={styles.mainContainer}>
        <Icon
          name="search"
          size={Metrics.icons.tiny}
          style={styles.searchIcon}
        />
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
