import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, IconButton, Grid } from '@mui/material';
import { GitHub, Launch, Assignment, Code, CheckCircleOutline } from '@mui/icons-material';
import AnimatedSection from './AnimatedSection';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Basic Ledger Service",
    description: "A comprehensive financial operations REST API service for essential banking operations.",
    features: [
      "Account creation and management",
      "Deposit and fund transfer capabilities",
      "Balance checking functionality",
      "Docker deployment support",
      "Complete API documentation"
    ],
    technologies: ["Java", "Spring Boot", "JDK 17", "Docker", "REST API", "Postman"],
    github: "https://github.com/umeshkanoja/basic-ledger-service"
  },
  {
    title: "Document Q&A Chatbot",
    description: "An intelligent document interaction system that enables natural language queries on uploaded documents.",
    features: [
      "PDF document upload and processing",
      "Natural language query processing",
      "Context-aware responses",
      "JWT authentication",
      "Vector-based document search"
    ],
    technologies: ["React", "Vite", "Django", "Langchain", "PostgreSQL", "pgvector", "JWT"],
    github: "https://github.com/umeshkanoja/document-qa-chatbot"
  },
  {
    title: "OCR API",
    description: "A streamlined OCR service that extracts text from images using Tesseract OCR.",
    features: [
      "Image to text conversion",
      "Multiple image format support",
      "RESTful API design",
      "Easy integration"
    ],
    technologies: ["FastAPI", "Python", "Tesseract OCR", "REST API"],
    github: "https://github.com/umeshkanoja/ocr-api"
  }
];

const Projects = () => {
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
            <Assignment />
          </IconButton>
          <Typography variant="h4" component="h2">
            Projects
          </Typography>
        </Box>
      </AnimatedSection>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <AnimatedSection delay={index * 0.2}>
              <Card 
                elevation={2}
                sx={{ 
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom color="primary" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Code fontSize="small" />
                    {project.description}
                  </Typography>

                  <Box sx={{ mt: 3, mb: 2 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'primary.main',
                        fontWeight: 'bold'
                      }}
                    >
                      <CheckCircleOutline fontSize="small" />
                      Key Features
                    </Typography>
                    <Box 
                      component="ul" 
                      sx={{ 
                        mt: 1, 
                        pl: 2,
                        listStyle: 'none'
                      }}
                    >
                      {project.features.map((feature, i) => (
                        <Box 
                          component="li" 
                          key={i}
                          sx={{
                            mb: 1,
                            p: 1,
                            '&:hover': {
                              bgcolor: 'action.hover',
                              borderRadius: 1
                            },
                            display: 'flex',
                            alignItems: 'flex-start',
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
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, i) => (
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

                  <CardActions sx={{ gap: 1, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    {project.github && (
                      <Button 
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="large"
                        sx={{ 
                          borderRadius: 2,
                          transition: 'all 0.2s',
                          '&:hover': { transform: 'translateY(-2px)' }
                        }}
                      >
                        View on GitHub
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        startIcon={<Launch />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="large"
                        sx={{ 
                          borderRadius: 2,
                          transition: 'all 0.2s',
                          '&:hover': { transform: 'translateY(-2px)' }
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 