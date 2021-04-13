import React, { createRef } from 'react'
import { CustomButton } from '../../BaseComponents/CustomButton'
import { H4 } from '../../BaseComponents/Text'
import { TextInput } from '../../BaseComponents/TextInput'
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from '../../Context/WardrobeContext'
import styles from './ShirtsScreenStyles'

export const ChooseShirtsScreen = () => {
    const wardrobeStore = useWardrobeStore()
    const textInputRef = createRef()

    const addShirt = () => {
        wardrobeStore.addShirt(textInputRef.current.value)
    }

    return <View style={styles.container}>
        <H4>Name Your Shirt to Add</H4>
        <TextInput ref={textInputRef} />
        <CustomButton onClick={addShirt} buttonLabel={'add new shirt'} />
    </View>
}