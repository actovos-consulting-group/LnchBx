/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, Button, Flex, Alert } from '@actovos-consulting-group/ui-core';
import { FaCog } from 'react-icons/fa';
import { GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../App';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown';
import { GOOGLE } from '../../constants';

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
  padding-right: 1em;
`;

const LogoContainer = styled(Flex)`
  width: 130px;
`;

const Header = ({ toggle, toggleCategoryModal }) => {
  const { userData, handleLogout } = useContext(AuthContext);
  const [settingsToggle, setSettingsToggle] = useState(false);

  const settingsToggleHandler = () => {
    setSettingsToggle(prevState => {
      return !prevState;
    });
  };

  return (
    <StyledNav>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Button onClick={toggle}>New LunchTrip</Button>
      <StyledDiv>
        <DefaultImg src={userData.image} />
        <h3 dropDownToggle="toggle">{userData.name}</h3>
        <FaCog
          onClick={settingsToggleHandler}
          style={{ position: 'relative', top: '1.25em', left: '1em' }}
        />
        <Dropdown toggleSettings={settingsToggle}>
          <li onClick={toggleCategoryModal}>Your Categories</li>
          <li
            onClick={() => {
              handleLogout(userData.id);
            }}
          >
            Logout
          </li>
        </Dropdown>
      </StyledDiv>
    </StyledNav>
  );
};

export default Header;
