import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  const { row, rowIndex } = props;
  return (
    <Grid sx={{ maxWidth: '1000px', paddingX: '40px' }} container>
      {row.map((cellText: string, cellIndex: number) => {
        return (
          <GridCell key={cellIndex} position={4 * rowIndex + cellIndex} item>
            {cellText}
          </GridCell>
        );
      })}
    </Grid>
  );
}
