import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem/ListItem';


const ListContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  width: 100%;
`;

const ListHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;


const List = ({header,name}) => (
  <ListContainer>
    <ListHeader>
        <h3>{header}</h3>
    </ListHeader>
    <ListItem>
        <h4>{name}</h4>
    </ListItem>

  </ListContainer>
);

export default List;
