import React from 'react'
import styled, { keyframes } from 'styled-components'

const gradiant = keyframes`
  from { background-position: 100%; }
  to { background-position: 0%; }
`

const AnimatedGradient = styled.div`
  background: linear-gradient(90deg, white 30%, #e4e4e4 50%, white 70%);
  background-size: 300%;
  animation: ${gradiant} 1s linear infinite;
`

const StyledWrapper = styled(AnimatedGradient)`
  -webkit-box-shadow: 0px 1px 32px 4px rgba(0,0,0,0.16);
  -o-box-shadow: 0px 1px 32px 4px rgba(0,0,0,0.16);
  -moz-box-shadow: 0px 1px 32px 4px rgba(0,0,0,0.16);
  box-shadow: 0px 1px 32px 4px rgba(0,0,0,0.16);
  position: relative;
  height: 100px;
  width: 100px;
`

export const GradiantWrapper = ({children, isLoading}) => {
  return (
    <StyledWrapper isLoading={isLoading}>
      {children}
    </StyledWrapper>
  )
}
