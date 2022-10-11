import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import GridRow from './GridRow';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategory,
  clearSelections,
  setCard,
  setCategory,
} from '../store/cardSlice';
import { createBingoCard } from '../scripts/createGrid';
import { presetCategories } from '../constants';

export function BingoCard() {
  const state = useSelector((state: any) => state.card);
  const card = state.card;

  const { category, customName, customSquares } = useParams();
  const dis = useDispatch();

  useEffect(() => {
    if (!state.category) {
      if (category) {
        dis(setCategory(category));
        dis(
          setCard(
            //@ts-ignore
            createBingoCard(presetCategories[category], state.dims)
          )
        );
      } else if (customName && customSquares) {
        const squares = customSquares.split(';');

        dis(
          addCategory({
            categoryName: customName,
            category: { squares, freeParking: 'Free Parking' },
          })
        );
        dis(setCategory(customName));
        dis(
          setCard(
            createBingoCard(
              { squares, freeParking: 'Free Parking' },
              state.dims
            )
          )
        );
      } else {
        const catName = Object.keys(presetCategories)[0];
        dis(setCategory(catName));
        dis(
          setCard(
            //@ts-ignore
            createBingoCard(presetCategories[catName], state.dims)
          )
        );
        dis(clearSelections(undefined));
      }
    }
  }, []);

  console.dir(card);
  console.dir(card[0]);
  console.dir('OUTSIDE');
  console.dir(card.length);

  return (
    <Grid sx={{ paddingY: 2 }} container justifyContent="center">
      <GridRow row={card[0]} rowIndex={0} />
      <GridRow row={card[1]} rowIndex={1} />
      <GridRow row={card[2]} rowIndex={2} />
      {card.length > 3 && <GridRow row={card[3]} rowIndex={3} />}
      {card.length > 4 && <GridRow row={card[4]} rowIndex={4} />}
    </Grid>
  );
}
