import React from 'react'
import { Text } from './Text'
import { View } from './View'

export const SelectedProductComponent = ({ product, productContainerStyle }) => {

    const { id, name, brand, color, size } = product

    return <View key={id} style={productContainerStyle}>
        <Text>product name: {name}</Text>
        <Text>brand: {brand}</Text>
        <Text>color: {color}</Text>
        <Text>size: {size}</Text>
    </View>
}