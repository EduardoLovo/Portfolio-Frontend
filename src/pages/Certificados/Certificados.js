import React from 'react';
import './Certificados.css';
import '../../Style/Style.css';
import { CertificadosList } from '../../structure/CertificadosList/CertificadosList';

export const Certificados = () => {



    return (
        <div className='bodyCertifcado style'>
            <h1>Certificados</h1>
            <CertificadosList />
        </div>
    )
}
