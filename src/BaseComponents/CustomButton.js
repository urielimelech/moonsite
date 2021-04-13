import React from 'react'

export const CustomButton = ({ onClick, buttonLabel, style }) => {
    return <button style={style} onClick={onClick}>{buttonLabel}</button>
}