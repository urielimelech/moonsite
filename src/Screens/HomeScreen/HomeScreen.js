import axios from 'axios'
import { useObserver } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { CustomList } from '../../BaseComponents/CustomList'
import { Text } from '../../BaseComponents/Text'
import { View } from '../../BaseComponents/View'
import { useWardrobeStore } from '../../Context/WardrobeContext'
import { API_URL } from '../../viewableConsts'
import styles from './HomeScreenStyles'

export const HomeScreen = () => {

    const wardrobeStore = useWardrobeStore()
    const [allState, setAllState] = useState([])

    useEffect(() => {
        if (wardrobeStore.getAll().length === 0) {
            axios.get(API_URL).then(res => {
                wardrobeStore.setAll(res.data.results)
                setAllState(res.data.results)
            })
        }
        else {
            setAllState(wardrobeStore.getAll())
        }
    }, [])

    return useObserver(() => (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <CustomList listHeader='shirts'>
                    {wardrobeStore.shirts.map(shirt => <Text key={shirt.id}>{shirt.name}</Text>)}
                </CustomList>
            </View>
            <View style={styles.listContainer}>
                <CustomList listHeader='pants'>
                    {wardrobeStore.pants.map(pant => <Text key={pant.id}>{pant.name}</Text>)}
                </CustomList>
            </View>
            <View style={styles.listContainer}>
                <CustomList listHeader='shoes'>
                    {wardrobeStore.shoes.map(shoe => <Text key={shoe.id}>{shoe.name}</Text>)}
                </CustomList>
            </View>
        </View>
    ))
}