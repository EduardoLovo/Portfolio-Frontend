import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <div className='navBar'>
            <h2>MENU</h2>
            <div className='links'>
                <Link to='/' className='link'><p>- PÁGINA INICIAL</p></Link>
                <Link to='/certificados' className='link'><p>- CERTIFICADOS</p></Link>
                <Link to='/qualificacoes' className='link'><p>- QUALIFICAÇÕES</p></Link>
                <Link to='/projetos' className='link'><p>- PROJETOS</p></Link>
                <Link to='/info' className='link'><p>- INFORMAÇÕES</p></Link>
                <Link to='/curriculo' className='link'><p>- CURRICULO</p></Link>
            </div>
        </div >
    )
}
