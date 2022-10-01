import styled from 'styled-components'

export const SmartDiv = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction?  direction : 'column'};
  ${({page})=> page && `
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`

