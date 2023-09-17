import HoverButton from ".";
import { SmartDiv } from '../../wrapper/Wrapper'

export default {
  title: 'Button/Hover'
}

const Template = (args) => {
  return (
    <SmartDiv>
      <HoverButton/>
    </SmartDiv>
  )
}

export const Hover = Template.bind({})