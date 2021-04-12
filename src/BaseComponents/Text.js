import React from 'react'

export const Text = props => {
    const { children } = props
    return <p {...props}>{children}</p>
}