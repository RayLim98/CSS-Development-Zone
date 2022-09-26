import React, {useInsertionEffect, useRef, useState} from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInputField = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: .01em solid #313B72;
  border-radius: .15em;
  padding: .5em;
  width: 20em;
  min-height: 2.5em;
  
  cursor: pointer;
  :hover, :focus {
    border: .01px solid #08B2E3;
  }
  outline: none;
`

const Value = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  font-size: inherit;
  outline: none;
`
const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: #08B2E3;
  }
`

const Clear = styled(StyledButton)`
  font-size: inherit;
`

// const SelectField = ({options, onChange, value}) => {
const InputField = ({
  placeholder,
  label,
}) => {
  const [value, setValue] = useState("");

  const onClick = e => {
    setValue("")
  }

  return (
    <StyledWrapper>
      {label}
      <StyledInputField tabIndex={0}>
        <Value
          value={value}
          placeholder={placeholder}
          onChange={e=> setValue(e.target.value)}
        />
          {
            value &&
            <Clear onClick={onClick}>
              &times;
            </Clear>
          }
      </StyledInputField>
    </StyledWrapper>
  )
}

export default InputField