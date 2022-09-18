import { Box, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BingoCount from './BingoCount';
import InstagramIcon from '@mui/icons-material/Instagram';

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
      </Grid>
      <BingoCount />
    </Box>
  );
}
