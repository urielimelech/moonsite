import { toJS } from "mobx"
import React, { useState } from "react"
import { CustomList } from "../../BaseComponents/CustomList"
import { ProductComponent } from "../../BaseComponents/ProductComponent"
import { Text } from "../../BaseComponents/Text"
import { TextInput } from "../../BaseComponents/TextInput"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./StylesChooseScreen"

export const ChooseShoeScreen = props => {
    const wardrobeStore = useWardrobeStore()

    const [shoesToShow, setShoeToShow] = useState(wardrobeStore.allShoes)

    const onChangeInputText = inputText => {
        if (inputText.length >= 2) {
            const filteredShoes = toJS(wardrobeStore.allShoes).filter(shoe => shoe.name.startsWith(inputText))
            setShoeToShow(filteredShoes)
        }
        else {
            setShoeToShow(wardrobeStore.allShoes)
        }
    }

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addShoes(selectedProduct)
        props.history.push('/')
    }

    return <View>
        <Text>Search Field:</Text>
        <TextInput onChangeText={onChangeInputText} />
        <View style={styles.container}>
            <CustomList listHeader={`shoes found for you: ${wardrobeStore.getShoesAmount()}`} style={styles.list}>
                {shoesToShow.map(shoe =>
                    <ProductComponent
                        key={shoe.id}
                        product={shoe}
                        productContainerStyle={styles.productContainer}
                        onSelectProduct={onSelectProduct}
                    />
                )}
            </CustomList>
        </View>
    </View>
}