import React from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../Api/Api';

export const AddStacks = () => {

  const handleSubmit = async event => {
    event.preventDefault();

    const titulo = event.target.titulo.value;
    const valor = event.target.valor.value;

    const payload = {
      titulo,
      valor
    };

    try {
      const response = await Api.fetchPostStacks(payload);
      const data = response.text();
      console.log(data);
    } catch (err) {
      console.log('error', err);
    }
  }
  return (
    <div className='bodyAdd style'>
      <h1>Adicionar Novo Stack</h1>
      <form className='formAdd' onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input
          type='text'
          id='titulo'
          name='titulo'
        />
        <label>Valor</label>
        <input
          type='number'
          id='valor'
          name='valor'
        />

        <input type='submit' className='btnEnviar' />
      </form>
      <div className='btnsAdm'>
        <Link to='/adm'>
          <button className='btnBack'>Voltar</button>
        </Link>
      </div>
    </div>
  )
}
