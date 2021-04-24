import React, { useState } from 'react'
import SelectedProduct from '../DataObjects/selectedProduct'
import { CustomButton } from './CustomButton'
import { Text } from './Text'
import { View } from './View'

export const ProductComponent = ({ product, productContainerStyle, onSelectProduct }) => {

    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    const { id, type, name, brand, colors, sizes } = product

    const onColorPressed = color => {
        setSelectedColor(color)
    }
    const onSizePressed = size => {
        setSelectedSize(size)
    }

    const onSelect = () => {
        if (selectedSize && selectedColor) {
            const selectedProduct = new SelectedProduct({ id, type, name, brand, color: selectedColor, size: selectedSize })
            typeof onSelectProduct === 'function' && onSelectProduct(selectedProduct)
        }
    }

    return <View style={productContainerStyle}>
        <Text>product name: {name}</Text>
        <Text>brand: {brand}</Text>
        <View style={styles.buttonsContainer}>
            <View>
                <Text>colors: </Text>
                {colors.map((color, index) => <CustomButton key={index} buttonLabel={color} onClick={() => onColorPressed(color)} />)}
            </View>
            <Text>selected color: {selectedColor ? selectedColor : 'not selected'}</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <View>
                <Text>sizes: </Text>
                {sizes.map((size, index) => <CustomButton key={index} buttonLabel={size} onClick={() => onSizePressed(size)} />)}
            </View>
            <Text>selected size: {selectedSize ? selectedSize : 'not selected'}</Text>
        </View>
        {onSelectProduct && <CustomButton buttonLabel={'add product'} onClick={onSelect} style={styles.addProductButton} />}
    </View>
}

const styles = {
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addProductButton: {
        marginTop: 20,
    }
}