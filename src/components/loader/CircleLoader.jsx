import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from { 
    transform: rotate(0); 
  }
  to {  
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  padding: .5rem;
  background: linear-gradient(to top, 
                rgba(255,0,0,0), 
                rgba(255,0,0,0),
                rgba(255,0,0,0.02),
              red);
  animation: ${rotate} 1000ms ease-in-out infinite;
  animation-duration: ${({duration}) => duration && duration};
`

const StyledDiv = styled.div`
  position: absolute;
  margin:.3rem;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color: white;
  border-radius: inherit;
`

export const CircleLoader = ({speed}) => {
  return (
    <Wrapper duration={`${1000/speed}ms`}>
      <StyledDiv/>
    </Wrapper>
  )
}
