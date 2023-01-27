import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBeat } from '../../store/cardSlice';

export default function BeatButton({
  index,
  chooseBeat,
}: {
  index: number;
  chooseBeat: any;
}) {
  const state = useSelector((state: any) => state.card);
  const dis = useDispatch();

  return (
    <Grid item xs={2} textAlign="center">
      <Button
        disabled={state.selectedBeat == index}
        variant="contained"
        onClick={() => {
          chooseBeat(index);
          dis(setSelectedBeat(index));
        }}
      >
        Beat {index + 1}
      </Button>
    </Grid>
  );
}
