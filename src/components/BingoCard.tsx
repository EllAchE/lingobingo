import React from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { useSelector } from 'react-redux';

export function BingoCard() {
  const state = useSelector((state: any) => state.card);
  const card = state.card;

  console.log('card');
  console.log(card);

  return (
    <Grid container justifyContent="center">
      <GridRow row={card[0]} rowIndex={0} />
      <GridRow row={card[1]} rowIndex={1} />
      <GridRow row={card[2]} rowIndex={2} />
      {card.length > 3 && <GridRow row={card[3]} rowIndex={3} />}
      {card.length > 4 && <GridRow row={card[4]} rowIndex={4} />}
    </Grid>
  );
}
