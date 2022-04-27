import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import './StacksList.css'

export const StacksList = () => {

    const [stacks, setStacks] = useState([])

    useEffect(() => {
        getStacks();

    }, [])

    const getStacks = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllStacksUrl());
        const data = await response.json();

        setStacks(data)
    };


    return (
        <div className='listStacks'>
            {stacks.map((stacks, index) => (
                <div className='stack' key={index}>
                    <div className='stackTitle'>
                        <p>

                            {stacks.titulo}
                        </p>
                    </div>

                    <div className='value'>
                        <div className={(stacks.valor === 5 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 5 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 5 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 5 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 5 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 4 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 4 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 4 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 4 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 3 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 3 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 3 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 2 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 2 ? 'valorStack' : 'none')}></div>
                        <div className={(stacks.valor === 1 ? 'valorStack' : 'none')}></div>

                    </div>

                </div>
            ))
            }
        </div >
    )
}
