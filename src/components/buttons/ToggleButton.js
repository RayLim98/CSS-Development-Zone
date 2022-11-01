import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'


const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
`

const StyledButton = styled.button`
    all: unset;
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f4ebd0;
    border-radius: 50%;
    transition: all 300ms cubic-bezier(0.000, 1.650, 0.175, 0.975); /* custom */
    :hover {
        transform: scale(1.05);
    }
    :active {
        transform: scale(0.8);
    }
    ${({active})=> active && `
        background-color: #b68d40;
    `}
`

const Active = styled.div `
    position: absolute;
    height: 110%;
    width: 110%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #d6ad60;
    transition: all 200ms cubic-bezier(0.000, 1.650, 0.175, 0.975); /* custom */
    animation: ${rotate} 4000ms linear infinite;
`

const ToggleButton = ({children}) => {
    const [active, setActive] = useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)
    const onClick = () => setActive(active => !active)
    const onEnter = () => setMouseEnter(true)
    const onLeave = () => setMouseEnter(false)

    return (
        <Wrapper>
            {
                active && <Active scale={1.1}/>
            }
            <StyledButton 
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onClick={onClick}
                enter={mouseEnter}
                active = {active} 
            >
                {children}
            </StyledButton>
        </Wrapper>
    )
}

export default ToggleButton