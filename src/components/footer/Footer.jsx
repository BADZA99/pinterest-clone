import React from 'react'
import { StyledFooter } from './Footer.styled';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {  Text } from '../../utils/text.styled';


const Footer = () => {
  return <StyledFooter><Text as="span" color="#000">
    Here's how it is work</Text>
    <MdOutlineKeyboardArrowDown
    size={26} 
    />
    </StyledFooter>;
}

export default Footer
