import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../Api/Api';
import './Add.css';

export const AddCertificados = () => {

    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault();

        const titulo = event.target.titulo.value;
        const modulo = event.target.modulo.value;
        const imagem = event.target.imagem.value;

        const payload = {
            titulo,
            modulo,
            imagem
        };

        try {
            const response = await Api.buildApiPostRequest(Api.createCertificadosUrl(), payload);
            const data = response.text();
            console.log(data);
            navigate('/certificados')
        } catch (err) {
            console.log('error', err);
        }
    }


    return (
        <div className='bodyAdd style'>
            <h1>Adicionar Novo Certificado</h1>
            <form className='formAdd' onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input
                    type='text'
                    id='titulo'
                    name='titulo'
                />
                <label>Modulo</label>
                <input
                    type='text'
                    id='modulo'
                    name='modulo'
                />
                <label>Imagem</label>
                <input
                    type='text'
                    id='imagem'
                    name='imagem'
                />
                <button type='submit' >Adicionar</button>
            </form>
            <div>
                <Link to='/adm'>
                    <button className='btnBack'>Volar</button>
                </Link>
            </div>
        </div>
    )
}
