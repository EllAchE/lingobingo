import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import EditableGridCell from './EditableGridCell';

export default function EditableGridRow(props: any) {
  const { rowIndex } = props;
  const state = useSelector((state: any) => state.card);

  const arr = [];
  let i = 0;
  while (i < state.dims) {
    arr.push(i);
    i += 1;
  }

  return (
    <Grid item xs={12}>
      <Grid
        container
        className="px-2 sm:px-8"
        sx={{ margin: 'auto', maxWidth: '1000px' }}
      >
        {arr.map((cellIndex: number) => {
          return (
            <EditableGridCell
              key={cellIndex}
              position={state.dims * rowIndex + cellIndex}
              item
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
