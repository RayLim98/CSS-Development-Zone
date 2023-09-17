import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const hover = css`
  transform: scale(1.5);
  background-color: azure;
`

const StyledButton = styled.button`
  all: unset;
  width: 4rem;
  height: 4rem;
  background-color: beige;
  border-radius: 50%;
  text-align: center;
  transition: all ease-in-out 100ms;
  cursor: pointer;
  ${({active}) => active && hover}
`

const HoverButton = () => {
    const [active, setActive] = useState(false);
    return(
    <StyledButton 
      onMouseEnter={()=> setActive(true)}
      onMouseLeave={()=> setActive(false)}
      active = {active}
    >
      Button
    </StyledButton>
  )
}

export default HoverButton