import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { JwtHandler } from '../../jwt-handler/jwt-handler';
import './Adm.css'

export const Adm = () => {

    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };

        window.addEventListener("onJwtChange", handleOnJwtChange);

        // Função de limpeza
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    const logout = () => {
        JwtHandler.clearJwt();
    }


    return (
        <div className='bodyAdm style'>
            <h1>Area do Adiministrador</h1>

            <div className='logado'>
                <Link to='/add/certificados'>
                    <button>Adicionar Certificados</button>
                </Link>
                <Link to='/add/stacks'>
                    <button>Adicionar Stacks</button>
                </Link>
                <Link to='/add/projects'>
                    <button>Adicionar Projetos</button>
                </Link>
            </div>
            <div className='btnsAdm'>
                <Link to='/'>
                    <button className='btnBack'>Voltar</button>
                </Link>

                <Link to='/'>{isLogged ? <button className='btnLogout' onClick={logout}>Logout</button> : null}</Link>

            </div>
        </div>
    )
}
