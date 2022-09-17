import React from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { BingoCardType } from '../types';
import { useSelector } from 'react-redux';
import { createBingoCard } from '../scripts/createGrid';
import { stat } from 'fs/promises';

export function BingoCard() {
  const state = useSelector((state: any) => state.card);
  const card = state.card;

  return (
    <Grid container maxWidth={'900px'} minWidth={'600px'} margin="auto">
      <GridRow row={card[0]} rowIndex={0}></GridRow>
      <GridRow row={card[1]} rowIndex={1}></GridRow>
      <GridRow row={card[2]} rowIndex={2}></GridRow>
      <GridRow row={card[3]} rowIndex={3}></GridRow>
      <GridRow row={card[4]} rowIndex={4}></GridRow>
    </Grid>
  );
}
