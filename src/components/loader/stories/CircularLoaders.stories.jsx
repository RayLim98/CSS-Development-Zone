import React from 'react';
import { SmartDiv } from '../../wrapper/Wrapper';
import { CircleLoader } from '../CircleLoader'
import { MultiColorLoader } from '../MultiColorLoader'

export default {
  title: 'Loader/CircularLoader',
}

const Temp1 = (args) => (
  <SmartDiv page>
    <MultiColorLoader {...args}/>
  </SmartDiv>
)

const Temp2 = (args) => (
  <SmartDiv page>
    <CircleLoader {...args}/>
  </SmartDiv>
)

export const SectorLoader = Temp1.bind({});
SectorLoader.args = {
  speed: 1,
}


export const NormalLoader = Temp2.bind({});
NormalLoader.args = {
  speed: 1,
}
