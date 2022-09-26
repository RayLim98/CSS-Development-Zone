import React from 'react';
import { SmartDiv } from '../components/wrapper/Wrapper';
import MultiColorLoader from '../components/loader/MultiColorLoader';
import CircleLoader from '../components/loader/CircleLoader'

export default {
  title: 'App/Loader',
}

const Template1 = (args) => (
  <SmartDiv page>
    <CircleLoader {...args}/>
  </SmartDiv>
)

const Template2 = (args) => (
  <SmartDiv page>
    <MultiColorLoader {...args}/>
  </SmartDiv>
)

export const Loader = Template1.bind({});

export const ColorLoader = Template2.bind({});
