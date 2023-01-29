import React, { useEffect, useRef } from 'react';
import { Divider, Grid } from '@mui/material';

import anime from 'animejs';
import { selectRandomRhymeSet, selectTwoRandom } from '../../scripts/rapUtils';
import { RHYME_SETS, WORD_SET_RANGES } from '../../rappingPairs';
import { useSelector } from 'react-redux';

export default function MovingText() {
  let animationRef = useRef(null);
  const state = useSelector((state: any) => state.card);

  // const m = selectRandomRhymeSet(WORD_SET_RANGES);
  // const [wordOne, wordTwo] = selectTwoRandom(RHYME_SETS[m]);

  useEffect(() => {
    animationRef.current = anime.timeline({ loop: true, autoplay: false });

    animationRef.current.add({
      targets: '.movingwords',
      opacity: 0,
      scale: 1.4,
      duration: 200,
      easing: 'easeInExpo',
      delay: 1000,
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
        <div
          onClick={() => {
            animationRef.current.play();
          }}
          className="movingwords"
        >
          {state.wordOne}
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
        {state.wordTwo}
      </Grid>
    </>
  );
}
