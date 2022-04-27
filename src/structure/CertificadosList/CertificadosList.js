import React, { useEffect, useState } from 'react';
import { Api } from '../../Api/Api'
import { CertificadosCard } from '../CertificadosCard/CertificadosCard';
import './CertificadosList.css';

export const CertificadosList = () => {

    const [certificados, setCertificados] = useState([]);


    useEffect(() => {
        getCertificado();
    }, [])

    const getCertificado = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllCertificadosUrl());
        const data = await response.json();

        setCertificados(data)
    }

    const moduloUm = []
    const moduloDois = []
    const moduloTres = []
    const moduloQuatro = []
    const moduloCinco = []


    certificados.forEach(i => {
        if (i.modulo === 'Logica de Programação') {
            moduloUm.push(i)
        } else if (i.modulo === 'Web, Banco de Dados, Cloud') {
            moduloDois.push(i)
        } else if (i.modulo === 'Fullstack l') {
            moduloTres.push(i)
        } else if (i.modulo === 'Fullstack ll') {
            moduloQuatro.push(i)
        } else {
            moduloCinco.push(i)
        }
    });


    return (
        <div className='bodyListCertificados'>

            <div className='backgrundDiv'>
                <h2>Módulo 1: Lógica de Programação</h2>
                <div className='listCertif'>
                    {moduloUm.map((certificado, index) => (
                        <CertificadosCard certificado={certificado} key={certificado._id} />
                    ))
                    }
                </div>
            </div>

            <div className='backgrundDiv'>
                <h2>Módulo 2: Web, Banco de Dados, Cloud</h2>
                <div className='listCertif'>
                    {moduloDois.map((certificado, index) => (
                        < div >
                            <CertificadosCard certificado={certificado} key={certificado._id} />
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className='backgrundDiv'>
                <h2>Módulo 3: Fullstack l</h2>
                <div className='listCertif'>
                    {moduloTres.map((certificado, index) => (
                        < div >
                            <CertificadosCard certificado={certificado} key={certificado._id} />
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className='backgrundDiv'>
                <h2>Módulo 4: Fullstack ll</h2>
                <div className='listCertif'>
                    {moduloQuatro.map((certificado, index) => (
                        < div >
                            <CertificadosCard certificado={certificado} key={certificado._id} />
                        </div>
                    ))
                    }
                </div>
            </div>

            <div className='backgrundDiv'>
                <h2>Módulo 5: Bootcamp</h2>
                <div className='listCertif'>
                    {moduloCinco.map((certificado, index) => (
                        < div >
                            <CertificadosCard certificado={certificado} key={certificado._id} />
                        </div>
                    ))
                    }
                </div>

            </div>



        </div >
    )
}
