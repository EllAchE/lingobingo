// TODO: this should allow gen of new random item
import React from 'react';
import Grid from '@mui/material/Grid';
import { GridCell } from './GridCell';

export function GridRow(props: any) {
  return (
    <Grid container justifyContent={'center'}>
      {props.row.map((cellText: string) => {
        return <GridCell item>{cellText}</GridCell>;
      })}
    </Grid>
  );
}
