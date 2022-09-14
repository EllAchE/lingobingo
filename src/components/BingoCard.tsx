import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { createGrid } from '../scripts/createWords';
import { presetCategories } from './presetCategories';

export function BingoCard({
  category,
  setCategory,
}: {
  category: string;
  setCategory: any;
}) {
  console.log('init ren');

  //@ts-ignore
  let { wordGrid } = createGrid(presetCategories[category]);

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
