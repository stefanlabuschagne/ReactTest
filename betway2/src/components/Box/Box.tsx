import React, { FC } from 'react';
import { BoxWrapper } from './Box.styled';

interface BoxProps {}

const Box: FC<BoxProps> = () => (
 <BoxWrapper>
    Box Component
 </BoxWrapper>
);

export default Box;
