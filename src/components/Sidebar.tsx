// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Button } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { CustomInput } from './CustomInput';

export function SideBar({
  category,
  setCategory,
  setWordGrid,
  clearCellSelections,
}: {
  category: string;
  setCategory: any;
  setWordGrid: any;
  clearCellSelections: any;
}) {
  return (
    <Box sx={{ position: 'fixed', top: '35%', left: 8, width: 300 }}>
      <CategorySelect category={category} setCategory={setCategory} />
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          setCategory(category);
        }}
        variant={'contained'}
      >
        Randomize Card
      </Button>
      <CustomInput setWordGrid={setWordGrid} />
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          clearCellSelections();
        }}
        variant={'contained'}
      >
        Clear Selections
      </Button>
    </Box>
  );
}
