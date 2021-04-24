import React from 'react'
import { ClothSetComponent } from '../../BaseComponents/ClothSetComponent'
import { CustomButton } from '../../BaseComponents/CustomButton'
import { CustomList } from '../../BaseComponents/CustomList'
import { H2 } from '../../BaseComponents/Text'
import { View } from '../../BaseComponents/View'
import { useWardrobeStore } from '../../Context/WardrobeContext'
import styles from './SuccessScreenStyles'

export const SuccessScreen = props => {

    const wardrobeStore = useWardrobeStore()

    const onCreateMorePressed = () => {
        props.history.push('/')
    }

    return (
        <View>
            <H2 style={styles.header}>🏆🚀👍 Your Successful Created Sets 👍🚀🏆</H2>
            <CustomList listHeader='selected sets'>
                {wardrobeStore.clothSets.map(
                    (clothSet, index) => (
                        <ClothSetComponent
                            key={clothSet.id}
                            clothSet={clothSet}
                            index={index}
                            clothSetContainerStyle={styles.clothSetContainerStyle}
                        />
                    )
                )}
            </CustomList>
            <CustomButton buttonLabel='create more sets' onClick={onCreateMorePressed} />
        </View>
    )
}