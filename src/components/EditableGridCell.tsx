import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorFreeParking } from '../store/cardSlice';

export default function EditableGridCell({
  position,
  rowLen,
  setAddingParking,
  addingParking,
}: any) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const dis = useDispatch();
  const state = useSelector((state: any) => state.card);

  useEffect(() => {
    const w = window.innerWidth - 16; // for margin
    const h = window.innerHeight;
    const boxDim = Math.min(w / rowLen, h / (rowLen + 2.05));
    setHeight(boxDim.toString());
    setWidth(boxDim.toString());
  });

  return (
    <Grid
      sx={{
        backgroundColor:
          state?.editorFreeParking && state.editorFreeParking[1] == position
            ? '#3252a8'
            : '',
        color:
          state?.editorFreeParking && state.editorFreeParking[1] == position
            ? 'white'
            : 'black',
      }}
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
      onClick={() => {
        if (addingParking) {
          const cell = document.getElementById(position.toString());
          //@ts-ignore
          dis(setEditorFreeParking([cell.innerText, position]));
          setAddingParking(false);
        }
      }}
    >
      <div
        id={position}
        className={`grid-cell editable-grid-cell w-full text-xs sm:text-md md:text-xl px-1 word-wrap break-words max-w-${width}`}
        contentEditable={true}
      ></div>
    </Grid>
  );
}
