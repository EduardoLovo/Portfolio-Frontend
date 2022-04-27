import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import './ProjetoList.css'

export const ProjetoList = () => {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        const getProjeto = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllProjetosUrl());
            const data = await response.json();

            setProjetos(data)
        }

        getProjeto()
    }, [])


    return (
        <div className='bodyProjetos'>
            {projetos.map((projeto, index) => (
                <div className='cardProjeto'>
                    <h1>{projeto.titulo}</h1>
                    <div className='imgLinks'>
                        <img src={projeto.imagem} alt='imagem'></img>
                        <a href={projeto.linkFront} target='_blank' rel="noreferrer">Acesse codigo aqui</a>

                    </div>
                    <div className='ferramentas'>
                        <h2>Ferramentas utilizadas:</h2>
                        <p>{projeto.ferramentas}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}
