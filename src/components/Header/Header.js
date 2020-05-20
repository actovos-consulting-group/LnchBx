import React from 'react';
import Logo from '../Logo/Logo';
import styled, { css } from 'styled-components';
import { Button } from '@actovos-consulting-group/ui-core';
import { FaUser } from '@actovos-consulting-group/ui-core/esm/Icons/fa';

const DefaultImg = styled(FaUser)(
  () => css`
    border-radius: 50%;
    border: 1px solid;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  `,
);

const StyledNav = styled.nav`
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
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
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Header = () => (
  <StyledNav>
    <Logo />
    <Button disabled>New LunchTrip</Button>
    <StyledDiv>
      <DefaultImg />
      <h3>Daniel</h3>
    </StyledDiv>
  </StyledNav>
);

export default Header;
