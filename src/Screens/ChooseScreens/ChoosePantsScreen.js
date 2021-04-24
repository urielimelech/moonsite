import { toJS } from "mobx"
import React, { useState } from "react"
import { CustomList } from "../../BaseComponents/CustomList"
import { ProductComponent } from "../../BaseComponents/ProductComponent"
import { Text } from "../../BaseComponents/Text"
import { TextInput } from "../../BaseComponents/TextInput"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./StylesChooseScreen"

export const ChoosePantsScreen = props => {
    const wardrobeStore = useWardrobeStore()

    const [pantsToShow, setPantsToShow] = useState(wardrobeStore.allPants)

    const onChangeInputText = inputText => {
        if (inputText.length >= 2) {
            const filteredPants = toJS(wardrobeStore.allPants).filter(pant => pant.name.startsWith(inputText))
            setPantsToShow(filteredPants)
        }
        else {
            setPantsToShow(wardrobeStore.allPants)
        }
    }

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addPants(selectedProduct)
        props.history.push('/')
    }

    return <View style={styles.screen}>
        <Text>Search Field:</Text>
        <TextInput onChangeText={onChangeInputText} />
        <View style={styles.container}>
            <CustomList listHeader={`pants found for you: ${wardrobeStore.getPantsAmount()}`} style={styles.list}>
                {pantsToShow.map(pant =>
                    <ProductComponent
                        key={pant.id}
                        product={pant}
                        productContainerStyle={styles.productContainer}
                        onSelectProduct={onSelectProduct}
                    />
                )}
            </CustomList>
        </View>
    </View >
}