import React, { useState } from "react";
import Card from "./components/cards";
import { Button, Container } from "@mui/material";
import CARDS from "./constants";

const MemoryGame = () => {
  const CARDS = [
    { id: 1, flipColor: "green", isFlip: false },
    { id: 2, flipColor: "yellow", isFlip: false },
    { id: 3, flipColor: "blue", isFlip: false },
    { id: 4, flipColor: "red", isFlip: false },
    { id: 5, flipColor: "green", isFlip: false },
    { id: 6, flipColor: "yellow", isFlip: false },
    { id: 7, flipColor: "blue", isFlip: false },
    { id: 8, flipColor: "red", isFlip: false },
    { id: 9, flipColor: "violet", isFlip: false },
    { id: 10, flipColor: "pink", isFlip: false },
    { id: 11, flipColor: "black", isFlip: false },
    { id: 12, flipColor: "orange", isFlip: false },
    { id: 13, flipColor: "violet", isFlip: false },
    { id: 14, flipColor: "pink", isFlip: false },
    { id: 15, flipColor: "black", isFlip: false },
    { id: 16, flipColor: "orange", isFlip: false },
  ];
  const [cards, setCards] = useState(CARDS);
  const [clickedCards, setClickedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [match, setMatches] = useState(0);

  const onClickRestart = () => {
    setClickedCards([]);
    setCards(cards.map((data) => (data.isFlip = false)));
    setMoves(0);
    setMatches(0);
  };
  const onCardClick = (data) => {
    setMoves(moves + 1);
    let cardData = [...cards];
    console.log(cardData, "cardssss", data);
    cardData[data.id - 1].isFlip = true;
    setCards(cardData);
    let currentClickedCards = [...clickedCards];
    currentClickedCards.push(data);
    if (currentClickedCards.length === 2) {
      if (
        currentClickedCards[0]?.flipColor !== currentClickedCards[1]?.flipColor
      ) {
        setTimeout(() => {
          let cardData = [...cards];
          console.log(cardData, "cardssss", data);
          cardData[currentClickedCards[0].id - 1].isFlip = false;
          cardData[currentClickedCards[1].id - 1].isFlip = false;
          setCards(cardData);

          setClickedCards([]);
        }, 500);
      } else {
        setMatches(match + 1);
        setClickedCards([]);
      }
    } else if (currentClickedCards.length > 2) {
      setClickedCards([]);
    } else {
      setClickedCards(currentClickedCards);
    }
  };
  console.log(cards, "cards");
  return (
    <Container
      maxWidth="md"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>Moves:{moves}</div>
      <div>Match:{match}</div>
      {match == 8 ? (
        <div>Match won</div>
      ) : (
        <>
          <Card
            cards={cards}
            moves={moves}
            match={match}
            onClick={(data) => onCardClick(data)}
            onClickRestart={() => onClickRestart()}
          />
          <Button variant="contained" onClick={() => onClickRestart()}>
            RESTART
          </Button>
        </>
      )}
    </Container>
  );
};

export default MemoryGame;
