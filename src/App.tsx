import React, { useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { presetCategories } from './scripts/presetCategories';
import { createBingoCard } from './scripts/createGrid';
import { SideBar } from './components/Sidebar';
import WaterMark from './components/WaterMark';
import { BingoCardType, SquareState } from './types';
import { BingoCard } from './components/BingoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setCard } from './store/cardSlice';

function App() {
  const [category, setCategory] = useState<string>('Corporate');
  const [bingoCard, setBingoCard] = useState<BingoCardType>(
    //@ts-ignore
    createBingoCard(presetCategories[category]).bingoCard
  );

  const dis = useDispatch();
  const cardState = useSelector((state: any) => state.card.card);

  function clearCellSelections() {
    const newState = JSON.parse(JSON.stringify(cardState));
    newState?.map((square: SquareState) => {
      square.isClicked = false;
      return square;
    });
    dis(setCard([...newState]));
  }

  function changeCategory(newCategory: string) {
    setCategory(newCategory);
    //@ts-ignore
    dis(setCard(createBingoCard(presetCategories[newCategory]).bingoCard));
    clearCellSelections();
  }

  //useEffect(() => {}, [squareStates]);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ paddingBottom: 2, paddingTop: 2, fontFamily: 'Helvetica' }}
        margin="auto"
        align="center"
      >
        Lingo Bingo - {category}
      </Typography>
      <BingoCard bingoCard={bingoCard} />
      <SideBar
        category={category}
        setCategory={changeCategory}
        setBingoCard={setBingoCard}
        clearCellSelections={clearCellSelections}
      />
      <WaterMark />
    </Box>
  );
}

export default App;
