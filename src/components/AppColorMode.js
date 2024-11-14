import * as React from 'react';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../themeContext";

export default function AppColorMode() {
  // const { user } = useUser();
  // console.log("------ user: ", user);
  // console.log("------ user.unsafeMetadata: ", user?.unsafeMetadata);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const themePaletteMode = theme.palette.mode;

  const handleClick = () => {
    colorMode.toggleColorMode();

    // user.update({
    //   unsafeMetadata: {
    //     ...user.unsafeMetadata,
    //     themePaletteMode,
    //   },
    // });
  }

  return (
    <Tooltip title={
      themePaletteMode === 'dark' ?
        "Light Mode" :
        "Dark Mode"
    }>
      <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {themePaletteMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  )
}