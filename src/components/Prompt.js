import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { fetchLLMGeneratedConfig } from "../redux/features/appSlice";

export default function Prompt() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);

  const handleSubmit = async () => {
    const userInput = document.getElementById("user-prompt");
    dispatch(fetchLLMGeneratedConfig(userInput.value));
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