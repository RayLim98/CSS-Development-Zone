import React from 'react';
import BubbleMenu from '../components/menu/bubble-menu'
import { SmartDiv } from '../components/wrapper/Wrapper';

export default {
  title: 'App/Menu',
}

const Template = (args) => 
  <SmartDiv page {...args}>
    {args.children}
  </SmartDiv>

export const Primary = Template.bind({});
Primary.args = {
  children: <BubbleMenu/>
}

