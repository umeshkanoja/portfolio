import { Box, Typography, Paper, Grid, LinearProgress, IconButton } from '@mui/material';
import { Code, TrendingUp } from '@mui/icons-material';
import AnimatedSection from './AnimatedSection';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frameworks and Libraries",
    items: [
      { name: "Spring Framework (Java)", level: 90 },
      { name: "FastAPI (Python)", level: 85 },
      { name: "ReactJS", level: 85 },
      { name: "React Native", level: 80 },
      { name: "ASP.NET MVC", level: 85 },
      { name: "AngularJS", level: 80 }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 90 },
      { name: "C#", level: 85 }
    ]
  },
  {
    category: "AWS Services",
    items: [
      { name: "DynamoDB", level: 90 },
      { name: "CloudFront", level: 85 },
      { name: "EC2", level: 90 },
      { name: "Lambda", level: 85 },
      { name: "API Gateway", level: 90 },
      { name: "S3", level: 95 }
    ]
  }
];

const Skills = () => {
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
            <Code />
          </IconButton>
          <Typography variant="h4" component="h2">
            Technical Skills
          </Typography>
        </Box>
      </AnimatedSection>

      <Grid container spacing={3}>
        {skills.map((skillGroup, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AnimatedSection delay={index * 0.2}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  color="primary"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 'bold'
                  }}
                >
                  <TrendingUp fontSize="small" />
                  {skillGroup.category}
                </Typography>
                {skillGroup.items.map((skill, i) => (
                  <Box 
                    key={i} 
                    sx={{ 
                      mb: 2,
                      p: 1,
                      '&:hover': {
                        bgcolor: 'action.hover',
                        borderRadius: 1
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight="medium">
                        {skill.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="primary"
                        sx={{ 
                          fontWeight: 'bold',
                          minWidth: 45,
                          textAlign: 'right'
                        }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'action.hover',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          backgroundImage: 'linear-gradient(90deg, #1976d2, #42a5f5)'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 