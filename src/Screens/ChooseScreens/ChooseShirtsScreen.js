import React from 'react'
import { CustomList } from '../../BaseComponents/CustomList'
import { ProductComponent } from '../../BaseComponents/ProductComponent'
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from '../../Context/WardrobeContext'
import styles from './StylesChooseScreen'

export const ChooseShirtsScreen = props => {
    const wardrobeStore = useWardrobeStore()

    const onSelectProduct = selectedProduct => {
        wardrobeStore.addShirt(selectedProduct)
        props.history.push('/')
    }

    return <View style={styles.container}>
        <CustomList listHeader={`shirts found for you: ${wardrobeStore.getShirtsAmount()}`} style={styles.list}>
            {wardrobeStore.allShirts.map(shirt =>
                <ProductComponent
                    key={shirt.id}
                    product={shirt}
                    productContainerStyle={styles.productContainer}
                    onSelectProduct={onSelectProduct}
                />
            )}
        </CustomList>
    </View>
}