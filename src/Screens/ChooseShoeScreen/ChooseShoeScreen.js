import React, { createRef } from "react"
import { CustomButton } from "../../BaseComponents/CustomButton"
import { H4 } from "../../BaseComponents/Text"
import { TextInput } from "../../BaseComponents/TextInput"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./ShoeScreenStyles"

export const ChooseShoeScreen = () => {
    const wardrobeStore = useWardrobeStore()
    const textInputRef = createRef()

    const addShoes = () => {
        wardrobeStore.addShoes(textInputRef.current.value)
    }

    return <View style={styles.container}>
        <H4>Name Your Shoes to Add</H4>
        <TextInput ref={textInputRef} />
        <CustomButton onClick={addShoes} buttonLabel={'add new shoe'} />
    </View>
}