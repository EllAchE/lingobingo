import { Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRapping } from '../../store/cardSlice';
import { BEAT_PATHS } from './constants';

export default function BeatDropdown() {
  const dis = useDispatch();

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={BEAT_PATHS}
      sx={{ width: 300 }}
      onChange={(event: any, newValue: { label: string; path: string }) => {
        dis(setRapping(true));
        const source: any = document.getElementById('myAudio');
        source.src = newValue.path;
      }}
      renderInput={(params) => <TextField {...params} label="Choose Beat" />}
    />
  );
}
