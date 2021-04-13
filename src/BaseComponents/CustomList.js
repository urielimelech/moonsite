import React from 'react'

export const CustomList = ({ children, styles = {} }) => {
    const { listContainer, listItem } = styles
    console.log(children)
    return <ul style={listContainer ? styles?.listContainer : {}}>
        {children.map((child, index) => {
            return <li key={index} style={listItem ? styles?.listItem : {}}>{child}</li>
        })}
    </ul>
}