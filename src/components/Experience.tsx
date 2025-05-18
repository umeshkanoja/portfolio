import { Box, Typography, Card, CardContent, Chip, Stack, Grid, IconButton, Avatar } from '@mui/material';
import { Work, LocationOn, CalendarToday } from '@mui/icons-material';
import AnimatedSection from './AnimatedSection';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  logoUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Salesforce",
    position: "Lead Software Engineer",
    period: "Present",
    location: "San Francisco Bay Area",
    description: [
      "Currently leading software development initiatives and engineering teams",
      "Architecting and implementing scalable cloud-based enterprise solutions",
      "Driving technical excellence and mentoring team members",
      "Collaborating with cross-functional teams to deliver high-quality software"
    ],
    technologies: ["Java", "Spring Framework", "Cloud Technologies", "Enterprise Software", "Team Leadership"],
    logoUrl: `${process.env.PUBLIC_URL}/company-logos/salesforce.png`
  },
  {
    company: "Amazon",
    position: "Software Development Engineer 2",
    period: "May 2019 - June 2024",
    location: "Hyderabad, India and Sunnyvale, CA, USA",
    description: [
      "Led a team of 5 engineers to design and implement In-Person Verification during seller registration, improving TP90 metrics by 67% and reducing seller resolution time from 21.15 to 6.96 days",
      "Drove user engagement by increasing Alexa Shopping Lists' personalized recommendations by 31% through a cross-product recommendation aggregator and merger system",
      "Collaborated with data scientists to design and develop Alexa's 'Next Grocery List' recommendations, achieving a 43% improvement in recall",
      "Integrated critical Address Validation protocol using postcard OTP in the seller registration flow, decreasing the auto-block rate from 27.7% to 1.8%"
    ],
    technologies: ["AWS", "Java", "Python", "Microservices", "Machine Learning"],
    logoUrl: `${process.env.PUBLIC_URL}/company-logos/amazon.png`
  },
  {
    company: "Microsoft",
    position: "Software Development Engineer 2",
    period: "June 2015 - May 2019",
    location: "Hyderabad, India",
    description: [
      "Spearheaded the incorporation of Adaptive Cards into Microsoft's personal assistant Cortana",
      "Created a visualization tool for Adaptive Card experiences in Cortana, reducing debugging time from hours to minutes",
      "Managed the full integration of 'Lists' into Cortana across Windows, Android, and iOS platforms",
      "Boosted task addition to Grocery Lists by 40% and enhanced user engagement by 30% through smart suggestions",
      "Enabled location-based notifications for Cortana's Grocery List on mobile devices",
      "Reduced on-call investigation time from ~25 mins to ~5 mins by creating an efficient log fetching tool"
    ],
    technologies: ["C#", ".NET", "Azure", "Windows", "Android", "iOS"],
    logoUrl: `${process.env.PUBLIC_URL}/company-logos/microsoft.png`
  }
];

const Experience = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <AnimatedSection>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton 
            sx={{ 
              mr: 2, 
              bgcolor: 'primary.main', 
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <Work />
          </IconButton>
          <Typography variant="h4" component="h2">
            Experience
          </Typography>
        </Box>
      </AnimatedSection>

      <Box sx={{ position: 'relative' }}>
        {/* Timeline Connector */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '50%', md: '120px' },
            transform: 'translateX(-50%)',
            top: 0,
            bottom: 0,
            width: '2px',
            bgcolor: 'primary.main',
            opacity: 0.3,
            zIndex: 0
          }}
        />

        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <AnimatedSection delay={index * 0.2}>
                <Card 
                  elevation={2}
                  sx={{ 
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    },
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      {/* Company Logo */}
                      <Grid item xs={12} sm={3} md={2}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            p: 2,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'divider',
                            minHeight: 80,
                            '&:hover': {
                              borderColor: 'primary.main',
                              boxShadow: 1
                            }
                          }}
                        >
                          <Box
                            component="img"
                            src={exp.logoUrl}
                            alt={`${exp.company} logo`}
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/200x100/f0f0f0/666666?text=${exp.company}`;
                            }}
                            sx={{
                              width: '100%',
                              maxWidth: 120,
                              height: 'auto',
                              maxHeight: 50,
                              objectFit: 'contain',
                              filter: 'contrast(1.1)',
                              transition: 'all 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.05)',
                                filter: 'contrast(1.2) brightness(1.05)'
                              }
                            }}
                          />
                        </Box>
                      </Grid>

                      {/* Experience Content */}
                      <Grid item xs={12} sm={9} md={10}>
                        <Typography variant="h5" component="h3" gutterBottom color="primary" fontWeight="bold">
                          {exp.company}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {exp.position}
                        </Typography>
                        
                        <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <CalendarToday fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {exp.period}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Stack>
                        </Stack>

                        <Box sx={{ my: 2 }}>
                          {exp.description.map((desc, i) => (
                            <Box 
                              key={i} 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'flex-start',
                                mb: 1,
                                '&:hover': {
                                  bgcolor: 'action.hover',
                                  borderRadius: 1
                                },
                                p: 1
                              }}
                            >
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  '&::before': {
                                    content: '"•"',
                                    color: 'primary.main',
                                    fontWeight: 'bold',
                                    display: 'inline-block',
                                    width: '1em',
                                    marginLeft: '-1em'
                                  }
                                }}
                              >
                                {desc}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                          {exp.technologies.map((tech, i) => (
                            <Chip 
                              key={i} 
                              label={tech} 
                              size="small" 
                              color="primary"
                              variant="outlined"
                              sx={{ 
                                transition: 'all 0.2s',
                                '&:hover': { 
                                  bgcolor: 'rgba(25, 118, 210, 0.08)',
                                  transform: 'translateY(-2px)'
                                }
                              }} 
                            />
                          ))}
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience; 