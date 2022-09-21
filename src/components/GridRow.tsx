import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  const { row, rowIndex } = props;
  return (
    <Grid item xs={12}>
      <Grid
        container
        className="px-2 sm:px-8"
        sx={{ margin: 'auto', width: '700px' }}
      >
        {row.map((cellText: string, cellIndex: number) => {
          return (
            <GridCell key={cellIndex} position={4 * rowIndex + cellIndex} item>
              {cellText}
            </GridCell>
          );
        })}
      </Grid>
    </Grid>
  );
}
