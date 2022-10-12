import React from 'react';
import Grid from '@mui/material/Grid';
import EditableGridCell from './EditableGridCell';

export default function EditableGridRow(props: any) {
  const { rowLen, rowIndex } = props;

  const arr = [];
  let i = 0;
  while (i < rowLen) {
    arr.push(i);
    i += 1;
  }

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
      >
        {arr.map((cellIndex: number) => {
          return (
            <EditableGridCell
              rowLen={rowLen}
              key={cellIndex}
              position={rowLen * rowIndex + cellIndex}
              item
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
