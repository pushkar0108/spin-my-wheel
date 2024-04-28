import React from "react";
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";

import BasicTabs from '../components/BasicTabs';
import Prompt from '../components/Prompt';

export default function RightPanel() {
  const { showTable } = useSelector((state) => state.app);

  return (
    showTable &&
    <Grid item xs={11} md={5}>
        <Prompt />
        <BasicTabs />
    </Grid>
  );
}