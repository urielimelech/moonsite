import React, { forwardRef, useState } from 'react'

export const TextInput = forwardRef(({ value = '', type = 'text' }, ref) => {
    const [text, setText] = useState('')
    const changeText = e => {
        setText(e.target.value)
    }
    return <input ref={ref} value={text} type={type} onChange={changeText} />
})