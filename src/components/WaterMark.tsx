import { Alert, Box, Button, Grid, IconButton, Snackbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { presetCategories } from '../constants';

function rickRoll() {
  window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ', '_blank');
}

function openTwitter() {
  window.open('https://twitter.com/myhandleisbest', '_blank');
}

function openGithub() {
  window.open('https://github.com/EllAchE', '_blank');
}

function openGoogleForm() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSfgCPr1rr9807sKvCAaX9_AcRLuGm1rell1OM0EkOpeSvRI6Q/viewform?usp=sf_link',
    '_blank'
  );
}

export default function WaterMark() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const state = useSelector((state: any) => state.card);

  function shareLink() {
    console.log('SHARE LINK');
    // let urlChunks = window.location.href.split('/');
    let url = 'https://lingobingo.app';
    if (state.category in presetCategories) {
      url += `/category/${state.category}`;
    } else if (state.category) {
      url += `/category/${state.category}/`;
      let cells = state.existingCategories[state.category].squares;
      if (state.editorFreeParking) {
        cells = cells.filter((cell: string) => {
          return cell != state.editorFreeParking[0];
        });
      }
      for (let cell of cells) {
        cell = cell.replaceAll(/\s/g, '%20');
        url += ';' + cell;
      }
      console.log('checking here');
      console.log(state.existingCategories);
      console.log(state.category);
      const fp = state.existingCategories[state.category].freeParking;
      if (fp) {
        url += ';' + fp + ';' + '~FP~';
      }
    }
    navigator.clipboard.writeText(url);
  }

  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        position: 'fixed',
      }}
    >
      <Grid>
        <IconButton onClick={openTwitter}>
          <TwitterIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={openGithub}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={rickRoll}>
          <InstagramIcon sx={{ fontSize: 40 }} />
        </IconButton>
        {!state.showBingoEffects && (
          <Button
            onClick={() => {
              shareLink();
              handleClick();
            }}
          >
            Share
          </Button>
        )}
        {!state.showBingoEffects && (
          <Button
            onClick={() => {
              openGoogleForm();
            }}
          >
            Suggest
          </Button>
        )}
      </Grid>
      <Snackbar open={open} autoHideDuration={2200} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%', right: 10 }}
        >
          Copied URL to clipboard!
        </Alert>
      </Snackbar>
      {/* <BingoCount /> */}
    </Box>
  );
}
