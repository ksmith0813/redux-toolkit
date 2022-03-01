import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, message } from 'antd'
import { addDog, getState } from 'store/slices/dogSlice'

export const Dogs = () => {
    const [name, setName] = useState('')
    const state = useSelector(getState)
    const dispatch = useDispatch()

    const onChange = (e) => setName(e.target.value)

    const onAddDog = () => {
        if (!name || name.trim() === '') {
            message.destroy()
            message.error('Please add a dog name')
            return
        }
        
        dispatch(addDog(name))
        setName('')
    }

    const dogs = state.dogs.map((dog, index) => <div key={index} className='pt-100'>{dog.name}</div>)
    const noDogs = !state.dogs.length && <div className='pt-100 light-text'>No Dogs have been added</div>
    
    return (
        <div className='page'>
            <Input onChange={onChange} value={name} placeholder='Add Dog' style={{width: 200}} />
            <Button onClick={onAddDog} type='primary' className='ml-100'>Add</Button>
            <div className='pt-200'>
                <div>List of Dogs</div>
                {dogs}
                {noDogs}
            </div>
        </div>
    )
}
