import { AppBar, Box, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BingoCount from './BingoCount';

export function openTwitter() {
  window.open('https://twitter.com/myhandleisbest', '_blank');
}

export function openGithub() {
  window.open('https://github.com/EllAchE', '_blank');
}

export default function WaterMark() {
  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        position: 'fixed',
        zIndex: -1,
      }}
    >
      <Grid>
        <IconButton onClick={openTwitter}>
          <TwitterIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={openGithub}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Grid>
      <BingoCount />
    </Box>
  );
}
