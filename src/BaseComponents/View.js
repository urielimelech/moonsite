import React from 'react'

export const View = ({ children, style, ...props }) => {
    return <div style={style} {...props}>{children}</div>
}