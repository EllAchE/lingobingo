import React from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';

export function BingoCard({ wordGrid }: { wordGrid: string[] }) {
  return (
    <Grid container maxWidth={'900px'} minWidth={'600px'} margin="auto">
      <GridRow row={wordGrid[0]}></GridRow>
      <GridRow row={wordGrid[1]}></GridRow>
      <GridRow row={wordGrid[2]}></GridRow>
      <GridRow row={wordGrid[3]}></GridRow>
      <GridRow row={wordGrid[4]}></GridRow>
    </Grid>
  );
}
