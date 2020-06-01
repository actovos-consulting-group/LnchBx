import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Button, Flex } from '@actovos-consulting-group/ui-core';
import { FaUser } from '@actovos-consulting-group/ui-core/esm/Icons/fa';
import Logo from '../Logo/Logo';
import { AuthContext } from '../../App';

const DefaultImg = styled.img(
  () => css`
    border-radius: 50%;
    border: 1px solid ${p => p.theme.colors.white};
    width: 50px;
    height: 50px;
    margin-right: 10px;
  `,
);

const StyledNav = styled.nav(
  ({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    padding: 10px;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-sizing: border-box;
    border-bottom: 3px solid ${theme.colors.pink};
  `,
);

const StyledDiv = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const LogoContainer = styled(Flex)`
  width: 130px;
`;

const Header = ({ toggle }) => {
  const { userData } = useContext(AuthContext);

  return (
    <StyledNav>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Button onClick={toggle}>New LunchTrip</Button>
      <StyledDiv>
        <DefaultImg src={userData.image} />
        <h3>{userData.name}</h3>
      </StyledDiv>
    </StyledNav>
  );
};

export default Header;
