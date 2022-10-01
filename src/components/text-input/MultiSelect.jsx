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
const Content = styled.div`
  flex-grow: 1;
  flex-wrap: wrap;
`

const Value = styled.span`
  flex-grow: 1;
  background-color: none;
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
const MultiSelect = ({options, label}) => {
  const [value, setValue] = useState([]);

  const [isOpen, setIsOpen] = useState(false)

  const onSelect = item => {
    if(!value.includes(item)) setValue(prev => [...prev, item])
  }

  const onDelete = item => {
    setValue(prev => prev.filter(currentValue => currentValue !== item))
  }

  const onDeleteAll = () => setValue([])

  return (
    <StyledDiv 
      tabIndex={0} 
      onClick={()=> setIsOpen(prev=> !prev)} 
      onBlur={()=> setIsOpen(false)}
    >
      {label}
      <Content>
        {
          value && value.map((item)=> 
            <>
              <Value>{item.value}</Value>
              <Clear
                onClick={e=> {
                  e.stopPropagation()
                  onDelete(item)
                }}
              >
                &times;
              </Clear>
            </>
          )
        }
      </Content>
      <Clear onClick={e=> {
        e.stopPropagation()
        onDeleteAll()
      }}>
        &times;
      </Clear>
      <List isOpen={isOpen}>
        {
          options.map(item => {
            if(!value.includes(item)) {
              return (
                  <StyledItem onClick={()=> onSelect(item)}>
                    {item.value}
                  </StyledItem>
                )
              }
            }
          )
        }
      </List>
    </StyledDiv>
  )
}

export default MultiSelect