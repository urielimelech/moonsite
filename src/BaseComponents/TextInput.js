import React, { forwardRef, useState } from 'react'

export const TextInput = forwardRef(({ value = '', type = 'text', onChangeText }, ref) => {
    const [text, setText] = useState('')
    const changeText = e => {
        const value = e.target.value
        setText(value)
        typeof onChangeText === 'function' && onChangeText(value)
    }
    return <input ref={ref} value={text} type={type} onChange={changeText} />
})