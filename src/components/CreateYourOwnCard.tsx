import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import EditableGridRow from './EditableGridRow';
import { Button } from '@mui/material';
import { addCategory } from '../store/cardSlice';

export function CreateYourOwnCard() {
  const dis = useDispatch();

  const state = useSelector((state: any) => state.card);
  const card = state.card;

  return (
    <>
      <Grid sx={{ paddingY: 2 }} container justifyContent="center">
        <EditableGridRow row={card[0]} rowIndex={0} />
        <EditableGridRow row={card[1]} rowIndex={1} />
        <EditableGridRow row={card[2]} rowIndex={2} />
        {card.length > 3 && <EditableGridRow row={card[3]} rowIndex={3} />}
        {card.length > 4 && <EditableGridRow row={card[4]} rowIndex={4} />}
      </Grid>
      <Button
        onClick={() => {
          const cells = document.querySelectorAll('.editable-grid-cell');
          let cardData: any[] = [];
          cells.forEach((el: any) => {
            cardData.push(el.innerText);
          });

          cardData = cardData.filter((t) => t);

          const cat = {
            squares: cardData,
            freeParking: 'Free Parking',
          };

          dis(addCategory({ categoryName: 'TEST', category: cat }));
        }}
      >
        Create Card
      </Button>
    </>
  );
}
