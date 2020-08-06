import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/49963273?s=460&u=4d243e38dd51375a4585f08d2a78f0194cf256a9&v=4" alt="Lucas Rozalem"/>
      <div>
        <strong>Lucas Rozalem</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de quimica avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vidas das pessoas atraves de experiencias.
      Mais de 200.000 ja passaram por umas das minhas explosoes.
    </p>

    <footer>
    <p>Preço/hora
    <strong>R$ 80,00</strong>
    </p>
    <button type="button">
      <img src={whatsappIcon} alt="Whatsapp"/>
      Entrar em contato
    </button>
  </footer>

  </article>
  )
}

export default TeacherItem;