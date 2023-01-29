import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';
import { useSelector } from 'react-redux';

export default function GridRow(props: any) {
  const { row, rowIndex } = props;
  const state = useSelector((state: any) => state.card);

  let sizedRow = row.slice(0, state.dims);

  return (
    <Grid item xs={12}>
      <Grid
        container
        sx={{
          paddingLeft: '12px',
          paddingRight: '4px',
          margin: 'auto',
          maxWidth: '1000px',
        }}
        alignItems="center"
        justifyContent={'center'}
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
