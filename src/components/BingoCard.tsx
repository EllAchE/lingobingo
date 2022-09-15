import React from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { BingoCardType, SquareState } from '../types';

export function BingoCard({
  bingoCard,
  squareStates,
  setSquareStates,
}: {
  bingoCard: BingoCardType;
  squareStates: SquareState[];
  setSquareStates: any;
}) {
  return (
    <Grid container maxWidth={'900px'} minWidth={'600px'} margin="auto">
      <GridRow
        squareStates={squareStates}
        setSquareStates={setSquareStates}
        row={bingoCard[0]}
        rowIndex={0}
      ></GridRow>
      <GridRow
        squareStates={squareStates}
        setSquareStates={setSquareStates}
        row={bingoCard[1]}
        rowIndex={1}
      ></GridRow>
      <GridRow
        squareStates={squareStates}
        setSquareStates={setSquareStates}
        row={bingoCard[2]}
        rowIndex={2}
      ></GridRow>
      <GridRow
        squareStates={squareStates}
        setSquareStates={setSquareStates}
        row={bingoCard[3]}
        rowIndex={3}
      ></GridRow>
      <GridRow
        squareStates={squareStates}
        setSquareStates={setSquareStates}
        row={bingoCard[4]}
        rowIndex={4}
      ></GridRow>
    </Grid>
  );
}
