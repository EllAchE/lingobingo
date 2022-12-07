import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

export default function EditableGridCell({ position, rowLen }: any) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    const w = window.innerWidth - 16; // for margin
    const h = window.innerHeight;
    const boxDim = Math.min(w / rowLen, h / (rowLen + 2.05));
    setHeight(boxDim.toString());
    setWidth(boxDim.toString());
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
      className="overflow-hidden"
    >
      <div
        className={`grid-cell editable-grid-cell w-full text-xs sm:text-md md:text-xl px-1 word-wrap break-words max-w-${width}`}
        contentEditable={true}
      ></div>
    </Grid>
  );
}
