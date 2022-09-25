import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`
const Wrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
`
const StyledSector = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: ${({borderColor})=> borderColor && borderColor};
  animation: ${rotate} 1000ms infinite;
  animation-timing-function: ${({timingType})=> timingType && timingType};
  animation-duration: ${({duration})=> duration && duration};
  mix-blend-mode: overlay;
`


const MultiColorLoader = () => {
  return (
    <Wrapper>
      <StyledSector 
        borderColor={'lightcoral'} 
        timingType={'linear'}
        duration={'1500ms'}
      />
      <StyledSector 
        borderColor={'lightblue'} 
        timingType={'ease-in-out'}
        duration={'3000ms'}
      />
      <StyledSector 
        borderColor={'lightgreen'} 
        timingType={'ease-out'}
        duration={'3000ms'}
      />
    </Wrapper>
  )
}

export default MultiColorLoader