import React, { useContext, useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  margin: 20px;
  color: ${(props) => props.theme.baseFontColor};
  border-radius: 2px;

  .cardHeader {
    color: ${(props) => props.theme.headerFontColor};
    font-size: 20px;
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.theme.accentBackgroundColor};
  }
  .cardName,
  .cardText {
    padding-left: 10px;
    padding-top: 10px;
  }

  .cardFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 20px;
  }
`;

const Card = (props) => {
  return (
    <StyledCard>
      <div className={'cardHeader'}>
        <div className={'cardName'}>{props.cardName}</div>
      </div>
      <div className={'cardBody'}>
        <div className={'cardText'}>{props.cardText}</div>
      </div>
      <div className={'cardFooter'}>
        <button
          onClick={() => {
            props.deleteCard();
          }}
        >
          Delete
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
