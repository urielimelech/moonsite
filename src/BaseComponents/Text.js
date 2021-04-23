import React from 'react'

export const Text = ({ children, style, ...props }) => {
    return <p style={style} {...props}>{children}</p>
}

export const H5 = ({ children, style, ...props }) => {
    return <h5 style={style} {...props}>{children}</h5>
}

export const H4 = ({ children, style, ...props }) => {
    return <h4 style={style} {...props}>{children}</h4>
}

export const H2 = ({ children, style, ...props }) => {
    return <h2 style={style} {...props}>{children}</h2>
}

export const H1 = ({ children, style, ...props }) => {
    return <h1 style={style} {...props}>{children}</h1>
}