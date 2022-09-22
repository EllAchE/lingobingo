import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';
import { useSelector } from 'react-redux';

export default function GridRow(props: any) {
  const { row, rowIndex } = props;
  console.log('row');
  console.log(row);
  const state = useSelector((state: any) => state.card);

  let sizedRow = row.slice(0, state.dims);

  return (
    <Grid item xs={12}>
      <Grid
        container
        className="px-2 sm:px-8"
        sx={{ margin: 'auto', width: '700px' }}
      >
        {sizedRow.map((cellText: string, cellIndex: number) => {
          return (
            <GridCell
              key={cellIndex}
              position={state.dims * rowIndex + cellIndex}
              item
            >
              {cellText}
            </GridCell>
          );
        })}
      </Grid>
    </Grid>
  );
}
