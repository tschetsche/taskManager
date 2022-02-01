import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  height: 300px;
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

const EditCard = (props) => {
  return (
    <StyledCard>
      <div className={'cardHeader'}>
        <div className={'cardName'}>{props.cardName}</div>
      </div>
      <div className={'cardBody'}>
        <div className={'cardText'}>Are you sure?</div>
      </div>
      <div className={'cardFooter'}>
        <button
          onClick={() => {
            props.deleteCard();
            props.setModal(false);
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            props.setModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </StyledCard>
  );
};

export default EditCard;
