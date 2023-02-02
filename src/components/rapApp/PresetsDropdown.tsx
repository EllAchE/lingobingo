import { Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { overwriteWordQueue, setRapping } from '../../store/rapSlice';
import { PRESETS } from './presets';

export default function PresetsDropdown() {
  const dis = useDispatch();

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={PRESETS}
      sx={{ width: 300 }}
      onChange={(
        event: any,
        newValue: { label: string; pairs: string; path: string }
      ) => {
        dis(setRapping(true));
        dis(overwriteWordQueue(newValue.pairs));
        const source: any = document.getElementById('myAudio');
        source.src = newValue.path;
      }}
      renderInput={(params) => (
        <TextField
          sx={{ backgroundColor: 'white' }}
          {...params}
          variant="filled"
          label="Choose Preset"
        />
      )}
    />
  );
}
