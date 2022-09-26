import React from 'react';
import { SmartDiv } from '../../wrapper/Wrapper';
import { GradiantWrapper } from '../gradiantWrapper';

export default {
  title: 'Loader/GradiantLoader',
}

const Temp1 = (args) => (
  <SmartDiv page>
    <GradiantWrapper/>
  </SmartDiv>
)

export const GradiantLoader = Temp1.bind({});
