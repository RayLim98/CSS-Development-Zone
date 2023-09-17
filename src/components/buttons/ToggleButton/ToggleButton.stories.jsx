import React from 'react';
import ToggleButton from '.';
import { SmartDiv } from '../../wrapper/Wrapper'

export default {
  title: 'Button/Toggle',
}

const Template = (args) => (
  <SmartDiv page>
    <ToggleButton>
      Button
    </ToggleButton>
  </SmartDiv>
)

export const Toggle = Template.bind({});
