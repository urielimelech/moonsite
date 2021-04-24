import { toJS } from 'mobx'
import React, { useState } from 'react'
import { CustomList } from '../../BaseComponents/CustomList'
import { ProductComponent } from '../../BaseComponents/ProductComponent'
import { Text } from '../../BaseComponents/Text'
import { TextInput } from '../../BaseComponents/TextInput'
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from '../../Context/WardrobeContext'
import styles from './StylesChooseScreen'

export const ChooseShirtsScreen = props => {
    const wardrobeStore = useWardrobeStore()

    const [shirtsToShow, setShirtsToShow] = useState(wardrobeStore.allShirts)

    const onChangeInputText = inputText => {
        if (inputText.length >= 2) {
            const filteredShirts = toJS(wardrobeStore.allShirts).filter(shirt => shirt.name.startsWith(inputText))
            setShirtsToShow(filteredShirts)
        }
        else {
            setShirtsToShow(wardrobeStore.allShirts)
        }
    }

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addShirt(selectedProduct)
        props.history.push('/')
    }

    return <View>
        <Text>Search Field:</Text>
        <TextInput onChangeText={onChangeInputText} />
        <View style={styles.container}>
            <CustomList listHeader={`shirts found for you: ${wardrobeStore.getShirtsAmount()}`} style={styles.list}>
                {shirtsToShow.map(shirt =>
                    <ProductComponent
                        key={shirt.id}
                        product={shirt}
                        productContainerStyle={styles.productContainer}
                        onSelectProduct={onSelectProduct}
                    />
                )}
            </CustomList>
        </View>
    </View>
}