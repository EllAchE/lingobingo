import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import EditableGridRow from './EditableGridRow';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import {
  addCategory,
  clearSelections,
  setCard,
  setCategory,
  setEditorFreeParking,
  toggleIsEditing,
} from '../store/cardSlice';
import { createBingoCard } from '../scripts/createGrid';
import addFreeParkingText from '../scripts/utils';

export function CreateYourOwnCard({ successSnack }: { successSnack: any }) {
  const state = useSelector((state: any) => state.card);
  const dis = useDispatch();

  const [categoryTitle, setCategoryTitle] = useState<string>('');
  const [editDims, setEditDims] = useState(state.dims);
  const [addingParking, setAddingParking] = useState<boolean>(false);

  return (
    <>
      <Grid sx={{ paddingY: 2 }} container justifyContent="center">
        <EditableGridRow
          addingParking={addingParking}
          setAddingParking={setAddingParking}
          rowLen={editDims}
          rowIndex={0}
        />
        <EditableGridRow
          addingParking={addingParking}
          setAddingParking={setAddingParking}
          rowLen={editDims}
          rowIndex={1}
        />
        <EditableGridRow
          addingParking={addingParking}
          setAddingParking={setAddingParking}
          rowLen={editDims}
          rowIndex={2}
        />
        {editDims > 3 && (
          <EditableGridRow
            addingParking={addingParking}
            setAddingParking={setAddingParking}
            rowLen={editDims}
            rowIndex={3}
          />
        )}
        {editDims > 4 && (
          <EditableGridRow
            setAddingParking={setAddingParking}
            rowLen={editDims}
            rowIndex={4}
          />
        )}
      </Grid>
      <Grid container justifyContent="center" alignItems={'center'}>
        <TextField
          onChange={(e) => {
            setCategoryTitle(e.target.value);
          }}
          label="Category Title"
          size="small"
        />
        <Button
          sx={{
            marginLeft: 2,
            height: '40px',
            backgroundColor: state.themeColor,
          }}
          variant="contained"
          onClick={() => {
            const cells = document.querySelectorAll('.editable-grid-cell');
            let cardData: any[] = [];
            cells.forEach((el: any) => {
              cardData.push(el.innerText);
            });

            cardData = cardData.filter((t) => {
              return t != state.editorFreeParking[0];
            });

            const fp = state.editorFreeParking
              ? addFreeParkingText(state.editorFreeParking[0])
              : undefined;

            const cat = {
              squares: cardData,
              freeParking: fp,
            };

            if (!categoryTitle) {
              alert('You must have a title for your category');
            } else if (cardData.length < 2) {
              alert(
                'You must have at least 2 bingo squares to create a category'
              );
            } else {
              dis(clearSelections(undefined));
              dis(
                addCategory({
                  categoryName: categoryTitle,
                  category: cat,
                })
              );
              dis(setCategory(categoryTitle));
              dis(toggleIsEditing(undefined));
              dis(setCard(createBingoCard(cat, editDims)));
              dis(setEditorFreeParking(undefined));
              successSnack();
            }
          }}
        >
          Create Card
        </Button>
        <Button
          disabled={addingParking}
          onClick={() => {
            setAddingParking(true);
          }}
        >
          Set Free Parking
        </Button>
        <FormControl sx={{ m: 1, minWidth: 140, zIndex: 1 }} size="small">
          <InputLabel id="demo-select-small">Set Dimensions</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={editDims}
            label="Set Dimensions"
            onChange={(e) => {
              setEditDims(e.target.value);
            }}
          >
            <MenuItem value={3}>3x3</MenuItem>
            <MenuItem value={4}>4x4</MenuItem>
            <MenuItem value={5}>5x5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
