import { AppBar, Box, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export function openTwitter() {
  window.open('https://twitter.com/myhandleisbest', '_blank');
}

export function openGithub() {
  window.open('https://github.com/EllAchE', '_blank');
}

export default function WaterMark() {
  return (
    <Box sx={{ bottom: 0, height: 40, width: '100%', position: 'fixed' }}>
      <Grid>
        <IconButton onClick={openTwitter}>
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={openGithub}>
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Box>
  );
}
