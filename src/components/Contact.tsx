import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setShowSuccess(true);
      reset();
    } catch (error) {
      setShowError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatedSection>
      <Box sx={{ mb: 4 }} id="contact">
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mt: 3 }}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                margin="normal"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{ required: 'Message is required' }}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Message"
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                margin="normal"
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{ mt: 2 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
        >
          <Alert severity="success" onClose={() => setShowSuccess(false)}>
            Message sent successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}
        >
          <Alert severity="error" onClose={() => setShowError(false)}>
            Failed to send message. Please try again.
          </Alert>
        </Snackbar>
      </Box>
    </AnimatedSection>
  );
};

export default Contact; 