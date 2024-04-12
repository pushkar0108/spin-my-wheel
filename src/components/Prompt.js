import * as React from 'react';
import getConfig from "../services/gemini";

import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

export default function Prompt({ handleConfig }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const userInput = document.getElementById("user-prompt");
      const config = await getConfig(userInput.value);
      handleConfig(config);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong. Please try again. Error: ", error);
      console.log("Error: ", error);
    }
  };

  return (
    <Grid sx={{marginTop: "10px"}} container alignItems="center"
    justifyContent="center" spacing={2}>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id="user-prompt"
          label="Enter your prompt to create AI generated wheel"
          variant="outlined" 
          multiline
          maxRows={6}
        />
        {
          error && <p style={{color: 'red'}}>{error}</p>
        }
      </Grid>
      <Grid item xs={4}>
        <LoadingButton
          loading={isLoading}
          variant="outlined"
          onClick={handleSubmit}
        >Create Wheel</LoadingButton>
      </Grid>
    </Grid>
  );
}