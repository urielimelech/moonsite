import { useObserver } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { CustomList } from '../../BaseComponents/CustomList'
import { Text } from '../../BaseComponents/Text'
import { View } from '../../BaseComponents/View'
import { useWardrobeStore } from '../../Context/WardrobeContext'
import { getRequest } from '../../RequestManager/BaseRequest'
import { API_URL } from '../../viewableConsts'
import styles from './HomeScreenStyles'

export const HomeScreen = () => {

    const wardrobeStore = useWardrobeStore()

    useEffect(() => {
        getRequest(API_URL, data => {
            wardrobeStore.setAll(data.results)
        })
    }, [])

    return useObserver(() => (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <CustomList listHeader='shirts'>
                    {wardrobeStore.allShirts.map(shirt => <Text key={shirt.id}>{shirt.name}</Text>)}
                </CustomList>
            </View>
            <View style={styles.listContainer}>
                <CustomList listHeader='pants'>
                    {wardrobeStore.allPants.map(pant => <Text key={pant.id}>{pant.name}</Text>)}
                </CustomList>
            </View>
            <View style={styles.listContainer}>
                <CustomList listHeader='shoes'>
                    {wardrobeStore.allShoes.map(shoe => <Text key={shoe.id}>{shoe.name}</Text>)}
                </CustomList>
            </View>
        </View>
    ))
}