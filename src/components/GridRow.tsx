import React from 'react';
import Grid from '@mui/material/Grid';
import GridCell from './GridCell';

export default function GridRow(props: any) {
  const { row, rowIndex } = props;
  return (
    <Grid container justifyContent={'center'}>
      {row.map((cellText: string, cellIndex: number) => {
        return (
          <GridCell
            setSquareStates={props.setSquareStates}
            squareStates={props.squareStates}
            position={5 * rowIndex + cellIndex}
            item
          >
            {cellText}
          </GridCell>
        );
      })}
    </Grid>
  );
}
