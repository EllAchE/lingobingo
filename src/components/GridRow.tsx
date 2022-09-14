import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  // console.dir('row');
  // console.dir(props);
  return (
    <Grid container justifyContent={'center'}>
      {props.row.map((cellText: string) => {
        return <GridCell item>{cellText}</GridCell>;
      })}
    </Grid>
  );
}
