import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';
import { JwtHandler } from '../../jwt-handler/jwt-handler';


export const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const usuario = event.target.usuario.value;
        const password = event.target.password.value;

        // Constrói um payload com esses dados
        const payload = {
            usuario,
            password,
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

        const body = await response.json();
        console.log(body);

        if (response.status === 200) {
            // Login successfully
            const accessToken = body.accessToken;

            JwtHandler.setJwt(accessToken);

            navigate('/adm')
        } else {
            // Error
        }
    }

    return (
        <div className='bodyAdd style'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='formAdd'>
                <label>Usuario</label>
                <input
                    type="text"
                    id="usuario"
                    name="usuario"
                />
                <label>Senha</label>
                <input

                    type="password"
                    id="password"
                    name="password"
                />
                <input type='submit' className='btnEnviar' />
            </form>
            <div className='btnsAdm'>
                <Link to='/' ><button className='btnBack'>Voltar</button></Link>
            </div>
        </div>
    )
}