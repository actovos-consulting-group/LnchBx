import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${p => p.theme.colors.black};
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Footer = () => (
  <StyledFooter>
    <p>Copyright 2020 Actovos Consulting Group</p>
  </StyledFooter>
);

export default Footer;
