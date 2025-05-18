import { Box, Typography, Paper, Grid, Avatar, Chip, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, LocationOn, Timer, School } from '@mui/icons-material';
import AnimatedSection from './AnimatedSection';

const Profile = () => {
  return (
    <Box>
      {/* Hero Section */}
      <AnimatedSection>
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4,
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                Umesh Kanoja
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
                Lead Software Engineer at Salesforce
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, mb: 3, opacity: 0.8 }}>
                Passionate about building scalable systems and mentoring teams to deliver exceptional software solutions.
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton 
                  href="https://github.com/umeshkanoja" 
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <GitHub />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/in/umeshkanoja/" 
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton 
                  href="mailto:umeshkanoja26@gmail.com"
                  sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Email />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar 
                src="/profile-photo.jpg"
                alt="Umesh Kanoja"
                sx={{ 
                  width: { xs: 200, md: 250 }, 
                  height: { xs: 200, md: 250 },
                  border: '4px solid white',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </AnimatedSection>

      {/* Quick Info */}
      <AnimatedSection delay={0.2}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn color="primary" />
                <Typography variant="body1">San Francisco Bay Area</Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Timer color="primary" />
                <Typography variant="body1">9+ Years Experience</Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ p: 2, height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <School color="primary" />
                <Typography variant="body1">Master's in Computer Science</Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </AnimatedSection>

      {/* About Me */}
      <AnimatedSection delay={0.4}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            mb: 4,
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}
        >
          <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I am a dedicated and proactive software engineer with a passion for building scalable systems 
            and leading high-performing teams. At Salesforce, I focus on developing robust backend services 
            and mentoring team members to deliver exceptional results.
          </Typography>
          <Typography variant="body1" paragraph>
            With experience at industry leaders like Amazon and Microsoft, I've developed a deep understanding 
            of distributed systems, cloud architecture, and enterprise software development. I believe in 
            writing clean, maintainable code and fostering a collaborative development environment.
          </Typography>
        </Paper>
      </AnimatedSection>

      {/* Key Highlights */}
      <AnimatedSection delay={0.6}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: { xs: 3, md: 4 },
            transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-4px)' }
          }}
        >
          <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
            Key Highlights
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Technical Leadership
                </Typography>
                <Typography variant="body1">
                  Led multiple teams in designing and implementing large-scale distributed systems, 
                  improving system performance and reliability.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body1">
                  Pioneered several internal tools and frameworks that significantly improved 
                  developer productivity and code quality.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
            <Chip 
              label="System Design" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
            <Chip 
              label="Team Leadership" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
            <Chip 
              label="Cloud Architecture" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
            <Chip 
              label="Performance Optimization" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
            <Chip 
              label="Mentorship" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
            <Chip 
              label="Agile Development" 
              color="primary" 
              variant="outlined" 
              sx={{ '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' } }}
            />
          </Stack>
        </Paper>
      </AnimatedSection>
    </Box>
  );
};

export default Profile; 