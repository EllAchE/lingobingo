import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  // console.log('grid row');
  const { row, rowIndex } = props;
  // console.log(row);
  return (
    <Grid container justifyContent={'center'}>
      {row.map((cellText: string, cellIndex: number) => {
        return (
          <GridCell key={cellIndex} position={5 * rowIndex + cellIndex} item>
            {cellText}
          </GridCell>
        );
      })}
    </Grid>
  );
}
