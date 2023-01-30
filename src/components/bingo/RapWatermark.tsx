import { Alert, Box, Button, Grid, IconButton, Snackbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

export default function RapWaterMark() {
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
    let url = 'https://lingobingo.app/rap';
    navigator.clipboard.writeText(url);
  }

  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        position: 'absolute',
      }}
    >
      <Grid container direction="row" justifyContent={'space-evenly'}>
        <Grid>
          <IconButton onClick={openTwitter}>
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton onClick={openGithub}>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton onClick={rickRoll}>
            <InstagramIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton
            onClick={() => {
              shareLink();
              handleClick();
            }}
          >
            <ShareIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={2200} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%', right: 10 }}
        >
          Copied site URL to clipboard!
        </Alert>
      </Snackbar>
      {/* <BingoCount /> */}
    </Box>
  );
}
