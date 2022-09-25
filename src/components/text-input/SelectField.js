import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
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

const Value = styled.span`
  flex-grow: 1;
  background-color: none;
  border: none;
  font-size: inherit;
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

const List = styled.ul`
  position: absolute;
  background-color: white;
  margin: 0;
  top: calc(100% + .5em);
  left: 0;
  right:0;
  padding: inherit;
  border-radius: inherit;
  border: .01em solid #313B72;
  font-size: 0.8em;
  display: ${props => props.isOpen? 'block': 'none'};
  z-index: 100;
`

const StyledItem = styled.li`
  list-style: none;
  :hover {
    color: #08B2E3;
  }
`

// const SelectField = ({options, onChange, value}) => {
const SelectField = ({options, label}) => {
  const [value, setValue] = useState("");

  const [isOpen, setIsOpen] = useState(false)

  const onChange = (item) => {
    setValue(item)
  }
  return (
    <StyledDiv 
      tabIndex={0} 
      onClick={()=> setIsOpen(prev=> !prev)} 
      onBlur={()=> setIsOpen(false)}
    >
      <Value>{value && value.value}</Value>
      {
        value &&
        <Clear onClick={e=> {
          e.stopPropagation()
          onChange(undefined)
        }}>
          &times;
        </Clear>
      }
      <List isOpen={isOpen}>
        {
          options.map(item => 
            <StyledItem onClick={()=> onChange(item)}>
              {item.value}
            </StyledItem>
          )
        }
      </List>
    </StyledDiv>
  )
}

export default SelectField