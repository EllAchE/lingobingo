// TODO: this should allow selection from some prechosen categories
import React from 'react';
import { Box, Button } from '@mui/material';
import { CategorySelect } from './CategorySelect';
import { CustomInput } from './CustomInput';

export function SideBar({
  category,
  setCategory,
  setWordGrid,
}: {
  category: string;
  setCategory: any;
  setWordGrid: any;
}) {
  return (
    <Box sx={{ position: 'fixed', top: '40%', left: 8, width: 300 }}>
      <Button
        onClick={() => {
          //   //@ts-ignore
          //   setWordGrid(...createGrid(presetCategories[category]).wordGrid);
          setCategory(category);
        }}
        variant={'contained'}
      >
        Generate New Card
      </Button>
      <CategorySelect category={category} setCategory={setCategory} />
      <CustomInput setWordGrid={setWordGrid} />
    </Box>
  );
}
