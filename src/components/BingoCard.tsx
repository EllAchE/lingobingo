import React from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { BingoCardType } from '../types';

export function BingoCard({ bingoCard }: { bingoCard: BingoCardType }) {
  return (
    <Grid container maxWidth={'900px'} minWidth={'600px'} margin="auto">
      <GridRow row={bingoCard[0]}></GridRow>
      <GridRow row={bingoCard[1]}></GridRow>
      <GridRow row={bingoCard[2]}></GridRow>
      <GridRow row={bingoCard[3]}></GridRow>
      <GridRow row={bingoCard[4]}></GridRow>
    </Grid>
  );
}
