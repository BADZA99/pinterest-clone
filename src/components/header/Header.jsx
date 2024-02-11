import React from 'react'
import { AuthButton, AuthButtonsContainer, LinkContainer, LogoContainer, StyledHeader, StyledLink } from './Header.styled'
import { FaPinterest } from "react-icons/fa";
import { Text } from '../../utils/text.styled';


const Header = () => {
    return (
      <StyledHeader>
        <LogoContainer>
          <FaPinterest size={37} color="#E60022" />
          <Text
            ColorType="pinterestColor"
            size="large"
            as="h1"
            className="logo"
          >
            Pinterest
          </Text>
        </LogoContainer>

        <LinkContainer>
          <StyledLink as="a" href="/">
            About
          </StyledLink>
          <StyledLink as="a" href="/">
            Business
          </StyledLink>
          <StyledLink as="a" href="/">
            Blog
          </StyledLink>

          <AuthButtonsContainer>
            <AuthButton type="highlight">Log in</AuthButton>
            <AuthButton ColorType="SignTextColor">Sign up</AuthButton>
          </AuthButtonsContainer>
        </LinkContainer>
      </StyledHeader>
    );
}

export default Header
