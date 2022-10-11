import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

export default function EditableGridCell({ position, rowLen }: any) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    setHeight((window.innerHeight / (rowLen + 2.05)).toString());
    setWidth(height);
  });

  return (
    <Grid
      container
      item
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs
      width={width ? width.toString() + 'px' : undefined}
      height={height ? height.toString() + 'px' : undefined}
      border={1}
      textAlign={'center'}
      key={position}
      className="overflow-hidden editable-grid-cell"
    >
      <div className="w-full" contentEditable={true}></div>
    </Grid>
  );
}
