import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${p => p.theme.colors.black};
  color: white;
  text-align: center;
  position: relative;
  height: 40px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Footer = () => (
  <StyledFooter>
    <p>Copyright 2020 Actovos Consulting Group</p>
  </StyledFooter>
);

export default Footer;
