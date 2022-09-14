import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  return (
    <Grid container justifyContent={'center'}>
      {props.row.map((cellText: string) => {
        return <GridCell item>{cellText}</GridCell>;
      })}
    </Grid>
  );
}
