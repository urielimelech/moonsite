import React from 'react'
import { H2 } from './Text'
import { View } from './View'

export const CustomList = ({ children, style = {}, listHeader }) => {
    const { listContainer, listItem } = style
    return <View style={{ display: 'flex', flexDirection: 'column' }}>
        {listHeader && <H2 style={{ textDecoration: 'underline', alignSelf: 'center' }}>{listHeader}</H2>}
        <View style={listContainer ? style?.listContainer : {}}>
            {children.map((child, index) => {
                return <View key={index} style={listItem ? style?.listItem : {}}>{child}</View>
            })}
        </View>
    </View>
}