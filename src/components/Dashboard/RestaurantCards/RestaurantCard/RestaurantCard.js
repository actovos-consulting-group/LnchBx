import React from 'react';
import { Block, Card, Grid } from '@actovos-consulting-group/ui-core';
import { IMAGES } from '../../../../assets/images/category_images/Images';
import styled, { css } from 'styled-components';

const StyledCard = styled(Card)`
  &:hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;

const ImageContainer = styled.div(
  ({ imgSrc }) => css`
    background-image: url(${imgSrc});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 150px;
  `,
);

const StyledBlock = styled(Block)`
  p.info {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
  }
`;

const imageSRC = info => {
  const filteredImg = IMAGES[info];

  return !!filteredImg ? filteredImg : IMAGES.unknown;
};

const RestaurantCard = ({ info: { name, location, categories } }) => (
  <Grid.Column size={4}>
    <StyledCard>
      <Block>
        <ImageContainer
          imgSrc={imageSRC(categories[0].shortName.toLowerCase())}
        />
        <StyledBlock>
          <h4 style={{ marginBottom: 0 }}>{name}</h4>
          <p className="info">
            <span>Category: {categories[0].shortName}</span>
          </p>
          <p>{location.formattedAddress}</p>
        </StyledBlock>
      </Block>
    </StyledCard>
  </Grid.Column>
);

export default RestaurantCard;
