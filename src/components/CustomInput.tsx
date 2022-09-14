// TODO: this should be where users put their word lists (comma separated)
import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export function GridRow(props: any) {
  return (
    <Grid container justifyContent={'center'}>
      {props.row.map((cellText: string) => {
        return <GridCell item>{cellText}</GridCell>;
      })}
    </Grid>
  );
}
