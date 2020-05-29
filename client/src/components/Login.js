import React, { useContext } from 'react';
import axios from 'axios';
import { Flex, Button } from '@actovos-consulting-group/ui-core';
import { FaGoogle } from '@actovos-consulting-group/ui-core/esm/Icons/fa';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import { AuthContext } from '../App';
import { getXSRFToken } from '../helpers/axios';
import { API } from '../constants';

const Column = styled(Flex)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RightColumn = styled(Column)`
  background-color: ${({ theme }) => theme.colors.black};
`;

const LogoContainer = styled(Flex)`
  width: 250px;
`;

const responseGoogle = response => {
  console.log(response);
  //make API call to laravel API
  const token = JSON.stringify(response.code);

  // pass accessToken
  // take accessToken and sent to API
  // take response from laravel API
  // push user object into session/localstorage
  // use useEffect in app.js
};

const Login = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Flex>
        <Column flexDirection="column">
          <GoogleLogin
            clientId="422036453944-lm20vv0ermsb87pdfnl4fkvvlrbro126.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            responseType="code"
            // onSuccess={() => auth.handleLogin(true)}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
          />
        </Column>
        <RightColumn>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </RightColumn>
      </Flex>
    </>
  );
};

export default Login;
