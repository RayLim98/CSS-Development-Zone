import React, { useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as Open}  from './open-book.svg'
import {ReactComponent as Closed}  from './closed-book.svg'

import {ReactComponent as Account}  from './account-user.svg'
import {ReactComponent as Home}  from './home.svg'
import {ReactComponent as Settings}  from './settings.svg'


const option = [
  {
    name: 'Home',
    navigation: 'home',
    icon: <Home fill='white'/>,
  },
  {
    name: 'Settings',
    navigation: 'settings',
    icon: <Settings fill='white'/>,
  },
  {
    name: 'Account',
    navigation: 'account',
    icon: <Account fill='white'/>,
  },
  {
    name: 'Account',
    navigation: 'account',
    icon: <Account fill='white'/>,
  },
]

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
`

const StyledButton = styled.button`
  border: unset;
  background-color: #aa1ce3;
  padding: 1em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #bc94c9;
  }
  z-index: 100;
`

const StyledItem = styled(StyledButton)`
  position: absolute;
  top: 0;
  right: ${({distance})=> distance && `${distance}%`};
  transform: scale(0.8);
  transition: right 0.2s ease-in-out; 
  z-index: 99;
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <StyledWrapper>
      <StyledButton 
        onClick={()=> setIsOpen(prev => !prev)}
      >
        {
          isOpen
          ? <Open fill='white' stroke='white'/>
          : <Closed fill='white' stroke='white'/>
        }
      </StyledButton>
      {
        option.map((item, idx)=> {
          // Add idx by 1 so first element ids is 1
          const i = idx + 1;
          const isEven = i % 2 === 0;
          // Calculate layer. only two items per layer
          const layer = (!isEven? i+1: i)/2   
          // Calculate position
          const percentage = 100 * layer;
          // Calc weather its left or right side
          const position =  isEven? percentage: percentage*-1;
          return(
            <StyledItem 
              key = {idx}
              distance={isOpen? position: 0}
              onClick={e => {
                console.log(item.name)
                setIsOpen(false)
              }}
            >
              {item.icon}
            </StyledItem>
          )
        }) 
      }
    </StyledWrapper>
  )
}

export default Menu