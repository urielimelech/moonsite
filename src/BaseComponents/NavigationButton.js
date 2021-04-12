import React from 'react'
import { Link } from "react-router-dom"
import { View } from './View'

export const NavigationButton = ({ path, label }) => {
    return (
        <View style={styles.buttonContainer}>
            <Link to={`/${path}`}>{label}</Link>
        </View>
    )
}

const styles = {
    buttonContainer: {
        backgroundColor: 'cyan',
        padding: 5,
    }
}