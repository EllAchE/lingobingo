import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';

export default function EditableGridCell({ position, children }: any) {
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    setHeight((window.innerHeight / (state.dims + 2.05)).toString());
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
