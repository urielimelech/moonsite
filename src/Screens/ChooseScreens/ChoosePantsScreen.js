import React from "react"
import { CustomList } from "../../BaseComponents/CustomList"
import { ProductComponent } from "../../BaseComponents/ProductComponent"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./StylesChooseScreen"

export const ChoosePantsScreen = () => {
    const wardrobeStore = useWardrobeStore()

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addPants(selectedProduct)
    }

    return <View style={styles.container}>
        <CustomList listHeader={`pants found for you: ${wardrobeStore.getPantsAmount()}`} style={styles.list}>
            {wardrobeStore.allPants.map(pant =>
                <ProductComponent
                    product={pant}
                    productContainerStyle={styles.productContainer}
                    onSelectProduct={onSelectProduct}
                />
            )}
        </CustomList>
    </View>
}