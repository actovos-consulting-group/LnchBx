import React, { useContext } from 'react';
import { Flex } from '@actovos-consulting-group/ui-core';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import { AuthContext } from '../App';
import { GOOGLE } from '../constants';

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
  alert('Trouble signing in to Google. Try again');
};

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  return (
    <>
      <Flex>
        <Column flexDirection="column">
          <GoogleLogin
            clientId={GOOGLE.client_id}
            buttonText="Login with Google"
            onSuccess={response => handleLogin(response)}
            responseType="code"
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
