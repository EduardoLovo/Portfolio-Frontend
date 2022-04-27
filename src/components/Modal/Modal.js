import React from 'react';
import './Modal.css'

export const Modal = (props) => {

    const img = props.imagem

    const onClose = props.onClose

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal') onClose()

    }


    return (
        <div>
            <section className='modal' id='modal' onClick={handleOutsideClick}>
                <div className='bodyModal'>
                    <div className='tituloModal'>

                        <h2>Certificado</h2>
                        <button onClick={onClose}><i class="bi bi-x"></i></button>


                    </div>
                    <div className='divImagemModal'>
                        <img id='imagemModal' src={img} alt='cer'></img>
                    </div>
                </div>
            </section>
        </div>
    )
}
