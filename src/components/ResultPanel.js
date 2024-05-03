import * as React from 'react';
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

export default function ResultPanel() {
  const { results } = useSelector((state) => state.app);

  return (
    <div id="result-panel">
      <Typography variant="h7" component="div">
        We have a winner!
      </Typography>

      <Typography
        sx={{ mt: 2, mb: 1.5 }} 
        variant="h4" 
        component="div">
        {results[0]}
      </Typography>
    </div>
  );
}