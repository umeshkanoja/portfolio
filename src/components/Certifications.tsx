import { Box, Typography, Grid, Card, CardContent, CardMedia, Link, Button } from '@mui/material';
import { Verified } from '@mui/icons-material';
import AnimatedSection from './AnimatedSection';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  imageUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "Learn Object-Oriented Programming in Python",
    issuer: "Educative",
    date: "Nov 2024",
    credentialId: "pg03nJFpnMOZN71j2HvD99MmOVn3h2",
    verificationUrl: "https://www.educative.io/verify-certificate/pg03nJFpnMOZN71j2HvD99MmOVn3h2"
  },
  {
    title: "Using TypeScript with React",
    issuer: "Educative",
    date: "Nov 2024",
    credentialId: "VQkXJZyOlNEhkAo0zQAN30hMzOOYqPxwNIr",
    verificationUrl: "https://www.educative.io/verify-certificate/VQkXJZyOlNEhkAo0zQAN30hMzOOYqPxwNIr"
  },
  {
    title: "The Complete Guide to Spring 5 and Spring Boot 2",
    issuer: "Educative",
    date: "Aug 2024",
    credentialId: "xl4kPz7rx4BFRvpBJX6GBmH7vNN1O6xK0CE",
    verificationUrl: "https://www.educative.io/verify-certificate/xl4kPz7rx4BFRvpBJX6GBmH7vNN1O6xK0CE"
  },
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    date: "Aug 2024",
    credentialId: "CERT1234",
    verificationUrl: "https://www.hackerrank.com/certificates/CERT1234"
  },
  {
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "Aug 2024",
    credentialId: "d8da440a3fb0",
    verificationUrl: "https://www.hackerrank.com/certificates/d8da440a3fb0"
  }
];

const Certifications = () => {
  return (
    <AnimatedSection>
      <Box sx={{ mb: 4 }} id="certifications">
        <Typography variant="h4" component="h2" gutterBottom>
          Certifications
        </Typography>
        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Issued {cert.date}
                  </Typography>
                  {cert.credentialId && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Credential ID: {cert.credentialId}
                    </Typography>
                  )}
                  {cert.verificationUrl && (
                    <Button
                      startIcon={<Verified />}
                      component={Link}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2 }}
                      size="small"
                    >
                      Verify
                    </Button>
                  )}
                </CardContent>
                {cert.imageUrl && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={cert.imageUrl}
                    alt={cert.title}
                  />
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatedSection>
  );
};

export default Certifications; 