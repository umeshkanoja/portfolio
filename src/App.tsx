import { Container, CssBaseline, ThemeProvider, createTheme, Box, Tabs, Tab, useTheme, alpha } from '@mui/material';
import { useState, useMemo, SyntheticEvent } from 'react';
import { Person, Work, Code, Assignment, EmojiEvents, Email } from '@mui/icons-material';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: value === index ? 1 : 0,
      }}
      {...other}
    >
      {value === index && (
        <Box 
          sx={{ 
            py: 3,
            px: { xs: 1, sm: 2 },
            minHeight: 'calc(100vh - 200px)',
            animation: value === index ? 'fadeIn 0.5s ease-in-out' : 'none',
            '@keyframes fadeIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)'
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [tabValue, setTabValue] = useState(0);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1e1e1e',
      },
    },
    typography: {
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: 64,
            padding: '12px 16px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: alpha('#1976d2', 0.08),
              transform: 'translateY(-2px)',
            },
            '&.Mui-selected': {
              color: '#1976d2',
              fontWeight: 600,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            height: 3,
            borderRadius: '3px 3px 0 0',
          },
        },
      },
    },
  }), [mode]);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleColorMode={toggleColorMode} mode={mode} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          position: 'sticky', 
          top: 0, 
          bgcolor: alpha(theme.palette.background.default, 0.95),
          backdropFilter: 'blur(8px)',
          zIndex: 1000, 
          px: 2,
          py: 1,
          mx: -2,
          boxShadow: tabValue > 0 ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'box-shadow 0.3s ease-in-out'
        }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="portfolio sections"
            sx={{
              '& .MuiTabs-flexContainer': {
                gap: 2,
              },
              '& .MuiTab-root': {
                minWidth: 120,
                borderRadius: 1,
              }
            }}
          >
            <Tab icon={<Person />} label="Profile" iconPosition="start" />
            <Tab icon={<Work />} label="Experience" iconPosition="start" />
            <Tab icon={<Code />} label="Skills" iconPosition="start" />
            <Tab icon={<Assignment />} label="Projects" iconPosition="start" />
            <Tab icon={<EmojiEvents />} label="Certifications" iconPosition="start" />
            <Tab icon={<Email />} label="Contact" iconPosition="start" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Experience />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Skills />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Projects />
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Certifications />
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          <Contact />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
