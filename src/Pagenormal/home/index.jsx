import React from 'react'
import Navbar from '../../Components/Header-Naoauh'
import { ButtonHome, Mainhome } from './styles'
import { Navigate } from 'react-router-dom'
import { ButtonCadastro } from '../../Components/Header-Naoauh/styles'
import { useNavigate } from 'react-router-dom';
import Carroselhome from '../../Components/Carrosel-Home/index'

export default function Inicio() {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/Cadastre-se');
  };
  return (
   
    <Mainhome className='w-100'> 
        <nav>
     <Navbar/>
      </nav>
      <div>
             <h1 className='Homeh1'>Natural,<br></br>
                 Sustentável,Confiável,<br/>
                  para consumidores conscientes<br></br>  e produtores locais.
                  </h1>
    </div>

    <div>
      <h3 className='homeh3'>Descubra e compre alimentos orgânicos e locais diretamente dos <br></br>agricultores e produtores da sua região, promovendo práticas sustentáveis e<br></br> apoiando a economia local.</h3>
    </div>
    <ButtonHome onClick={handleCadastroClick}> Cadastrar agora </ButtonHome>


     <Carroselhome/>


    </Mainhome>
  )
}
