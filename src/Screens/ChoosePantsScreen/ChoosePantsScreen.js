import React, { createRef } from "react"
import { CustomButton } from "../../BaseComponents/CustomButton"
import { H4 } from "../../BaseComponents/Text"
import { TextInput } from "../../BaseComponents/TextInput"
import { View } from "../../BaseComponents/View"
import { useWardrobeStore } from "../../Context/WardrobeContext"
import styles from "./PantsScreenStyles"

export const ChoosePantsScreen = () => {
    const wardrobeStore = useWardrobeStore()
    const textInputRef = createRef()

    const addPants = () => {
        wardrobeStore.addPants(textInputRef.current.value)
    }

    return <View style={styles.container}>
        <H4>Name Your Pants to Add</H4>
        <TextInput ref={textInputRef} />
        <CustomButton onClick={addPants} buttonLabel={'add new pants'} />
    </View>
}