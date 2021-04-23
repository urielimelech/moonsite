import React from 'react'
import { H4 } from './Text'
import { View } from './View'

export const CustomList = ({ children, styles = {}, listHeader }) => {
    const { listContainer, listItem } = styles
    return <View style={listContainer ? styles?.listContainer : {}}>
        {listHeader && <H4 style={{textDecoration: 'underline'}}>{listHeader}</H4>}
        {children.map((child, index) => {
            return <View key={index} style={listItem ? styles?.listItem : {}}>{child}</View>
        })}
    </View>
}