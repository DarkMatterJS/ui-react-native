import _ from 'lodash'

export const ScaleMethods = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  goldenRatio: 1.618,
}

export const createFontSizeFromScale = (factor, baseRem = 16, scale = ScaleMethods.perfectFourth) =>
  baseRem * Math.pow(scale, factor)

const capitalizeFirstLetter = value => value.charAt(0).toUpperCase() + value.slice(1)

export const createVariations = (baseName, nameSuffixes, key, value) =>
  _.reduce(
    nameSuffixes,
    (result, variant) => {
      const variantName = variant ? `${baseName}-${variant}` : baseName
      const keyName = variant ? `${key}${capitalizeFirstLetter(variant)}` : key

      result[variantName] = {
        [keyName]: value,
      }

      return result
    },
    {},
  )

/*
export const createSharedStyle = (componentNames, sharedStyle = {}, customStyles = {}) =>
  _.reduce(
    componentNames,
    (result, componentName) => {
      // eslint-disable-next-line no-param-reassign
      result[componentName] = {
        ...sharedStyle,
        ...customStyles[componentName],
      }

      return result
    },
    {},
  )
*/
