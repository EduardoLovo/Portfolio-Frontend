import React from 'react'
import { Link } from 'react-router-dom'

export const AddProjetcs = () => {
    return (
        <div className='bodyAdd style'>
            <h1>Adicionar Novo Projeto</h1>
            <form className='formAdd'>
                <label>Titulo</label>
                <input />
                <label>Valor</label>
                <input />

                <input type='submit' className='btnEnviar' />
            </form>
            <div className='btnsAdm'>
                <Link to='/adm'>
                    <button className='btnBack'>Voltar</button>
                </Link>
            </div>
        </div>
    )
}
