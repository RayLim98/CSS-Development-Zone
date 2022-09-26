import React from 'react';
import { SmartDiv } from '../../wrapper/Wrapper';
import { BubbleMenu } from '../bubble-menu';

export default {
  title: 'Menu/Bubble',
}

const Template = (args) => 
  <SmartDiv page {...args}>
    <BubbleMenu/>
  </SmartDiv>

export const Bubble = Template.bind({});
