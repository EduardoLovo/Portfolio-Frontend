import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../Style/Style.css'
import { Link } from 'react-router-dom';
import { JwtHandler } from '../../jwt-handler/jwt-handler'

export const Home = () => {

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


    return (
        <div className='bodyHome style'>
            <div className='contentBody'>
                <h1>Eduardo Lovo</h1>
                <img src='https://i.imgur.com/ZJe9ECv.jpg' alt='Foto Eduardo' className='pic' />


                <div className='icones'>
                    <a href='https://www.linkedin.com/in/eduardo-felipe-lovo-475019214/' target='_blank' rel="noreferrer">
                        <img src='https://i.imgur.com/V8ArUCJ.png' alt='linkedin' />
                    </a>
                    <a href='https://www.instagram.com/eduardo.llovo/?hl=pt-br' target='_blank' rel="noreferrer">
                        <img src='https://i.imgur.com/H1Be5hw.png' alt='instagram' />
                    </a>
                    <a href='https://github.com/EduardoLovo' target='_blank' rel="noreferrer">
                        <img src='https://i.imgur.com/7Mgzki7.png' alt='gitHub' />
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=5543999567684' target='_blank' rel="noreferrer">
                        <img src='https://i.imgur.com/Rb5BXRy.png' alt='whats' />
                    </a>


                </div>

            </div>

            <div className='imgGif'>
                <Link to={isLogged ? '/adm' : '/login'}>
                    <img src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif' alt="sss" title='Projetos' />
                </Link>
            </div>

            <div className='gif'>

                <p className='typing animation'>Dev FullStack</p>

            </div>
        </div>
    )
}
