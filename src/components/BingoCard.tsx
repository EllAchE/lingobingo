import React from 'react';
import Grid from '@mui/material/Grid';
import { GridRow } from './GridRow';
import { createGrid } from '../scripts/createWords';

export function BingoCard() {
  const testWords = [
    'Someone wearing patagonia',
    'Someone wearing allbirds',
    'Airpods or case visible',
    'RSUs mentioned',
    'Earnings report',
    'Vest and rest',
    '1 billion in the bank',
    'Swimply',
    'Circle back',
    'Presentation of more than 40 slides',
    'Catered Food',
    'CEO high fives someone',
    'Apple watch',
    'Mandarin spoken',
    'Revenue Forecast',
    'Revenue Forecast',
    'Revenue Forecast',
    'Revenue Forecast',
    'Revenue Forecast',
    'Revenue Forecast',
    'Revenue Forecast',
    'Any or Q1, Q2, Q3,Q4',
    'Acronym with more than 4 lettersa',
    'Acronym with more than 4 lettersa',
    'More than 3 acronyms in one sentence',
  ];
  const { wordGrid } = createGrid(testWords);
  return (
    <Grid container maxWidth={'900px'} minWidth={'600px'}>
      <GridRow row={wordGrid[0]}></GridRow>
      <GridRow row={wordGrid[1]}></GridRow>
      <GridRow row={wordGrid[2]}></GridRow>
      <GridRow row={wordGrid[3]}></GridRow>
      <GridRow row={wordGrid[4]}></GridRow>
    </Grid>
  );
}
