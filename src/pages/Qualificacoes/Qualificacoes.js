import React from 'react';
import './Qualificacoes.css';
import '../../Style/Style.css'
import { StacksList } from '../../structure/StacksList/StacksList';

export const Qualificacoes = () => {
    return (
        <div className='bodyStack style'>
            <h1>Qualificacoes</h1>
            <div className='listSta'>
                <StacksList />
            </div>
        </div>
    )
}
