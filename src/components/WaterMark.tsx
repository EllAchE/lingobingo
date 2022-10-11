import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  stepperClasses,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BingoCount from './BingoCount';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
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
  window.open('https://github.com/EllAchE/lingobingo', '_blank');
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
    // let urlChunks = window.location.href.split('/');
    let url = 'lingobingo.app';
    if (state.category in presetCategories) {
      url += `/category/${state.category}`;
    } else if (state.category) {
      url += `/category/${state.category}/`;
      for (const cell of state.existingCategories[state.category].squares) {
        url += ';' + cell;
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
        <IconButton
          onClick={() => {
            shareLink();
            handleClick();
          }}
        >
          <ShareIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <Button
          onClick={() => {
            shareLink();
            handleClick();
          }}
        >
          Share
        </Button>
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
      <BingoCount />
    </Box>
  );
}
