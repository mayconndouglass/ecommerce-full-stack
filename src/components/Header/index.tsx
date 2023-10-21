import * as S from './styles'

import { useState } from 'react'

import { Center } from '../Center'
import { AnimatedIcon } from '../AnimatedIcon'

import logo from '/assets/images/logo.png'

import { PiShoppingCartThin } from 'react-icons/Pi'
import { CiHeart } from 'react-icons/Ci'
import { CiSearch } from 'react-icons/Ci'
import { CiUser } from 'react-icons/Ci'
import { RiMenu3Fill } from 'react-icons/Ri'
import { AiOutlineClose } from 'react-icons/Ai'


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Header $menuIsOpen={isOpen}>
      <div className="header-utils">
        <ul>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Siga-nos</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>

      <Center>

        <div className='container-navigation'>
          <img src={logo} alt="logo" />

          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Loja</a></li>
              <li><a href="#">Páginas</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>

          <div className="icons">
            <AnimatedIcon icon={<CiSearch />} color='#292930' />
            <AnimatedIcon icon={<CiHeart />} color='#292930' />
            <AnimatedIcon icon={<PiShoppingCartThin />} color='#292930' />
            <AnimatedIcon icon={<CiUser />} color='#292930' />

            <div onClick={() => setIsOpen(!isOpen)}>
              <AnimatedIcon icon={<RiMenu3Fill />} color='#292930' />
            </div>
          </div>
        </div>

        <S.SideBar $menuIsOpen={isOpen}>
          <div className="side-bar-header">
            <img src={logo} alt="Logo" />

            <div className="close-menu" onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose />
            </div>
          </div>

          <div className="list-menu">
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Loja</a></li>
                <li><a href="#">Páginas</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </S.SideBar>

        <div className="overlay"></div>
      </Center>
    </S.Header>
  )
}