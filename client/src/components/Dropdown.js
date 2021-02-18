import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div(
  () => css`
    display: none;
    box-sizing: initial;
    position: absolute;
    top: 6em;
    right: 0.5em;
    padding: 1em;
    background-color: ${p => p.theme.colors.black};
    box-shadow: rgb(105, 101, 101) 0px 1px 3px 0px;
    border-radius: 5px;
  `,
);

const StyledLi = styled.li(
  () => css`
    list-style-type: none;
    padding-right: 1em;
    margin-top: 0.75em;
    color: ${p => p.theme.colors.orange};
    &:hover {
      background-color: #495663;
    }
  `,
);

const Dropdown = ({ children, toggleSettings }) => {
  const toggleDiv = toggleSettings ? 'block' : 'none';

  const menuItems = children.map(item => {
    return <StyledLi>{item}</StyledLi>;
  });
  return <StyledDiv style={{ display: toggleDiv }}>{menuItems}</StyledDiv>;
};

export default Dropdown;
