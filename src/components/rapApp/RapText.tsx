import React, { useEffect, useRef } from 'react';
import { Button, Divider, Grid } from '@mui/material';

// const anime = require('animejs');
import anime from 'animejs';
import { selectRandom, selectTwoRandom } from '../../scripts/rapUtils';
import { rappingPairs } from '../../rappingPairs';

export default function MovingText() {
  let animationRef = useRef(null);

  const [wordOne, wordTwo] = selectTwoRandom(selectRandom(rappingPairs));

  useEffect(() => {
    //@ts-ignore
    animationRef.current = anime.timeline({ loop: true, autoplay: false });

    //@ts-ignore
    animationRef.current.add({
      targets: '.movingwords',
      opacity: 0,
      scale: 1.4,
      duration: 200,
      easing: 'easeInExpo',
      delay: 1000,
    });
    //@ts-ignore
    animationRef.current.add({
      targets: '.movingwords',
      opacity: [0.6, 1],
      scale: [0.2, 1],
      duration: 300,
    });
    //@ts-ignore
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
        <div
          onClick={() => {
            //@ts-ignore
            animationRef.current.play();
          }}
          className="movingwords"
        >
          {wordOne}
        </div>
      </Grid>
      <Divider
        sx={{ width: '100%', height: '4px', backgroundColor: 'black' }}
        component="div"
        role="presentation"
      />
      <Grid
        item
        xs={12}
        textAlign="center"
        sx={{ margin: 'auto' }}
        className="text-6xl movingwords"
      >
        {wordTwo}
      </Grid>
    </>
  );
}
