import React from 'react'

export const Text = props => {
    const { children } = props
    return <p {...props}>{children}</p>
}

export const H5 = props => {
    const { children } = props
    return <h5 {...props}>{children}</h5>
}
export const H4 = props => {
    const { children } = props
    return <h4 {...props}>{children}</h4>
}
export const H2 = props => {
    const { children } = props
    return <h2 {...props}>{children}</h2>
}
export const H1 = props => {
    const { children } = props
    return <h1 {...props}>{children}</h1>
}