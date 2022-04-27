import React, { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import './CertificadosCard.css'


export const CertificadosCard = (props) => {

    const certificado = props.certificado


    const [isModalVisible, setIsModalVisible] = useState(false)


    return (
        <div className='card'>
            <div onClick={() => setIsModalVisible(true)} >
                <img src={certificado.imagem} alt='imagem certificado' />
            </div>
            {isModalVisible ? <Modal imagem={certificado.imagem} onClose={() => setIsModalVisible(false)} /> : null}
        </div>

    )
}
