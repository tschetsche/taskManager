import React, { useState, useEffect, useContext } from 'react';
import Card from 'Components/Card/Card';
import styled from 'styled-components';
import { ModalContext } from 'HOC/GlobalModalProvider';
import EditCard from 'Components/ModalContent/EditCard';

const StyledTaskList = styled.div`
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.accentFontColor};
  font-size: 20px;
`;

const TaskList = (props) => {
  const [cardList, setCardList] = useState(null);

  const openModal = useContext(ModalContext);

  const handleCardDeleteModalOpen = (cardID) => () => {
    const card = cardList.find((card) => card.id === cardID);
    const cardIndex = cardList.indexOf(card);
    openModal(
      <EditCard
        cardName={card.cardName}
        deleteCard={() => {
          const newCardList = [...cardList];
          newCardList.splice(cardIndex, 1);
          setCardList(newCardList);
        }}
        setModal={openModal}
      />
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setCardList([
        { cardName: 'Name 1', cardText: 'card text', id: 1 },
        { cardName: 'Name 2', cardText: 'card text', id: 2 },
        { cardName: 'Name 3', cardText: 'card text', id: 3 },
        { cardName: 'Name 4', cardText: 'card text', id: 4 },
        { cardName: 'Name 5', cardText: 'card text', id: 5 },
      ]);
    }, 1000);
  }, []);

  if (!cardList) {
    return <StyledLoadingWrapper>...Loading</StyledLoadingWrapper>;
  }

  return (
    <StyledTaskList>
      {cardList.map((taskInfo) => (
        <Card
          key={taskInfo.id}
          cardID={taskInfo.id}
          cardName={taskInfo.cardName}
          cardText={taskInfo.cardText}
          deleteCard={handleCardDeleteModalOpen(taskInfo.id)}
        />
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
