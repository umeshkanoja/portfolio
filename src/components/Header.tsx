import { AppBar, Toolbar, Typography, Box, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email, Brightness4, Brightness7 } from '@mui/icons-material';

interface HeaderProps {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

const Header = ({ toggleColorMode, mode }: HeaderProps) => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'background.paper', py: 2 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Umesh Kanoja
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Lead Software Engineer at Salesforce
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton onClick={toggleColorMode} color="inherit" aria-label="toggle dark mode">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:umeshkanoja26@gmail.com"
            color="inherit"
            aria-label="email"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <Email />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/umeshkanoja/"
            target="_blank"
            color="inherit"
            aria-label="linkedin"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/umeshkanoja"
            target="_blank"
            color="inherit"
            aria-label="github"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <GitHub />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 