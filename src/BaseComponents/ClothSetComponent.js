import React from 'react'
import { SelectedProductComponent } from './SelectedProductComponent'
import { H4, Text } from './Text'
import { View } from './View'

export const ClothSetComponent = ({ clothSet, index, clothSetContainerStyle }) => {
    return (
        <View style={clothSetContainerStyle}>
            <H4>set number: {index + 1}</H4>
            <View style={styles.productsContainer}>
                <SelectedProductComponent product={clothSet.shirt} productContainerStyle={styles.productContainerStyle} />
                <SelectedProductComponent product={clothSet.pant} productContainerStyle={styles.productContainerStyle} />
                <SelectedProductComponent product={clothSet.shoes} productContainerStyle={styles.productContainerStyle} />
            </View>
            <Text>sum of set sizes: {clothSet.shirt.size + clothSet.shoes.size + clothSet.pant.size}</Text>
        </View>
    )
}

const styles = {
    productsContainer: {
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly'
    },
    productContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
    },

}