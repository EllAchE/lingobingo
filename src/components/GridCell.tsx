import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function GridCell(props: any) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Grid
      container
      justifyContent={'space-around'}
      justifyItems={'center'}
      alignItems={'center'}
      xs={2}
      border={1}
      height={'120px'}
      textAlign={'center'}
      sx={{
        backgroundColor: isClicked ? '#3252a8' : undefined,
        color: isClicked ? 'white' : undefined,
        'border-color': 'black',
      }} // light blue
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <Typography sx={{ paddingX: 1 }} variant={'body1'}>
        {props.children}
      </Typography>
    </Grid>
  );
}
