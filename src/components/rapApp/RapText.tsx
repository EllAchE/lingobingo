import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import anime from 'animejs';
import { useSelector } from 'react-redux';

export default function MovingText({ animationRef }: { animationRef: any }) {
  const state = useSelector((state: any) => state.card);

  useEffect(() => {
    animationRef.current = anime.timeline({ loop: true, autoplay: false });

    animationRef.current.add({
      targets: '.movingwords',
      opacity: 0,
      scale: 1.4,
      duration: 200,
      easing: 'easeInExpo',
      delay: 800,
    });
    animationRef.current.add({
      targets: '.movingwords',
      opacity: [0.6, 1],
      scale: [0.2, 1],
      duration: 300,
    });
    animationRef.current.add({
      targets: '.movingwords',
      duration: 200,
      delay: 500,
    });
  }, []);

  return (
    <>
      <Grid
        item
        xs={12}
        textAlign="center"
        sx={{ margin: 'auto' }}
        className="text-6xl movingwords"
      >
        <div className="movingwords">{state.wordOne}</div>
      </Grid>
      <Grid
        item
        xs={12}
        textAlign="center"
        sx={{ margin: 'auto' }}
        className="text-6xl movingwords"
      >
        {state.wordTwo}
      </Grid>
    </>
  );
}
