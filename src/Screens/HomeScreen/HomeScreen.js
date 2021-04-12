import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationButton } from '../../BaseComponents/NavigationButton'
import { Text } from '../../BaseComponents/Text'
import { View } from '../../BaseComponents/View'
import styles from './HomeScreenStyles'

export const HomeScreen = () => {

    return <View style={styles.container}>
        <Text>hello here</Text>
        <Link to="/pants">to pants</Link>
        <NavigationButton path={'shoes'} label={'go to shoes now'} />
    </View>
}