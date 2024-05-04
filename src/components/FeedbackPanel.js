import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function FeedbackPanel() {
  const handleSubmit = () => {
    const name = document.getElementById("form-name").value;
    const subject = document.getElementById("form-subject").value;
    const message = document.getElementById("form-message").value;
    const finalMessage = `${message}\n\nRegards - ${name}`;

    window.open(`mailto:pickerwheel.in@gmail.com?subject=${subject}&body=${encodeURIComponent(finalMessage)}`, '_blank').focus();
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="div">
            Feedback
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="form-name" fullWidth label="Full Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField id="form-subject" fullWidth label="Subject" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField id="form-message" fullWidth multiline minRows={3} label="Message" variant="outlined" />
      </Grid>
      <Grid container item xs={12} justifyContent="flex-end">
        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
      </Grid>
    </Grid>
  );
}