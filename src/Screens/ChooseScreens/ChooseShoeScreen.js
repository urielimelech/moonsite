import React from "react"
import { CustomList } from "../../BaseComponents/CustomList"
import { ProductComponent } from "../../BaseComponents/ProductComponent"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./StylesChooseScreen"

export const ChooseShoeScreen = props => {
    const wardrobeStore = useWardrobeStore()

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addShoes(selectedProduct)
        props.history.push('/')
    }

    return <View style={styles.container}>
        <CustomList listHeader={`shoes found for you: ${wardrobeStore.getShoesAmount()}`} style={styles.list}>
            {wardrobeStore.allShoes.map(pant =>
                <ProductComponent
                    product={pant}
                    productContainerStyle={styles.productContainer}
                    onSelectProduct={onSelectProduct}
                />
            )}
        </CustomList>
    </View>
}