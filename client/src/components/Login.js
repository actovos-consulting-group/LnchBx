import React, { useContext } from 'react';
import axios from 'axios';
import { Button, Flex, Grid, Input } from '@actovos-consulting-group/ui-core';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import { API } from '../constants';
import { AuthContext } from '../App';

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
};

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const onSubmit = values => {
    axios
      .post(`${API.host}/api/auth/login`, values)
      .then(({ data }) => {
        handleLogin(data.user);
      })
      .catch(error => {
        alert(error);
      });
  };
  return (
    <>
      <Flex>
        <Column flexDirection="column">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <Grid.Row>
                  <Grid.Column size={{ _: 12, md: 12, lg: 12 }}>
                    <Field name="email">
                      {({ input }) => (
                        <Input label="Email" required {...input} />
                      )}
                    </Field>
                  </Grid.Column>
                  <Grid.Column size={{ _: 12, md: 12, lg: 12 }}>
                    <Field name="password">
                      {({ input }) => (
                        <Input
                          label="Password"
                          type="password"
                          required
                          {...input}
                        />
                      )}
                    </Field>
                  </Grid.Column>
                  <Grid.Column size={{ _: 12, md: 12, lg: 12 }}>
                    <Button
                      fullWidth
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Login
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </form>
            )}
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
