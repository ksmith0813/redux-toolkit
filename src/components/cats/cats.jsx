import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, message } from 'antd'
import { addCat, getState } from 'store/slices/catSlice'

export const Cats = () => {
    const [name, setName] = useState('')
    const state = useSelector(getState)
    const dispatch = useDispatch()

    const onChange = (e) => setName(e.target.value)

    const onAddCat = () => {
        if (!name || name.trim() === '') {
            message.destroy()
            message.error('Please add a cat name')
            return
        }

        dispatch(addCat(name))
        setName('')
    }

    const cats = state.cats.map((cat, index) => <div key={index} className='pt-100'>{cat.name}</div>)
    const noCats = !state.cats.length && <div className='pt-100 light-text'>No cats have been added</div>

    return (
        <div className='page'>
            <Input onChange={onChange} value={name} placeholder='Add Cat' style={{ width: 200 }} />
            <Button onClick={onAddCat} type='primary' className='ml-100'>Add</Button>
            <div className='pt-200'>
                <div>List of Cats</div>
                {cats}
                {noCats}
            </div>
        </div>
    )
}
