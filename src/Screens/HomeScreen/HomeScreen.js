import { useObserver } from 'mobx-react-lite'
import React from 'react'
import { CustomList } from '../../BaseComponents/CustomList'
import { Text } from '../../BaseComponents/Text'
import { View } from '../../BaseComponents/View'
import { useWardrobeStore } from '../../Context/WardrobeContext'
import styles from './HomeScreenStyles'

export const HomeScreen = () => {

    const wardrobeStore = useWardrobeStore()

    return useObserver(() => (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <CustomList>
                    {wardrobeStore.shirts.map(shirt => <Text key={shirt.shirtId}>{shirt.shirtName}</Text>)}
                </CustomList>
            </View>
        </View>
    ))
}