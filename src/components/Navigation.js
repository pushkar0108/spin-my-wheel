import * as React from 'react';
import * as NextLink from 'next/link';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ShareIcon from '@mui/icons-material/Share';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Image from 'next/image';
import { setShowConfigModal, setShowFeedbackModal, incrementFullScreenCounter, showSnackBar } from "../redux/features/appSlice";
import AppColorMode from "./AppColorMode";

const pages = [{
  title: 'Blog',
  icon: <SpeakerNotesIcon />,
  onClick: (dispatch, router) => {
    router.push(`/blog`);
  },
}, {
  title: 'Feedback',
  icon: <FeedbackIcon />,
  onClick: (dispatch) => {
    dispatch(setShowFeedbackModal(true));
  },
}, {
  title: 'Share',
  icon: <ShareIcon />,
  onClick: (dispatch) => {
    const text = 'https://www.pickerwheel.in';
    navigator.clipboard.writeText(text);
    dispatch(showSnackBar({
      open: true,
      severity: 'success',
      title: 'Website copied to clipboard!',
      message: text,
    }));
  },
},{
  title: 'Settings',
  icon: <SettingsIcon />,
  onClick: (dispatch) => {
    dispatch(setShowConfigModal(true));
  },
},{
  title: 'Full Screen',
  icon: <FullscreenIcon />,
  onClick: (dispatch) => {
    dispatch(incrementFullScreenCounter());
  },
}];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setAnchorElNav(null);
    page.onClick(dispatch, router);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/images/wheel_icon.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <Typography
            variant="h7"
            noWrap
            component={NextLink}
            href="/"
            sx={{
              ml: { xs: 2, md: 2 },
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'circular',
              fontSize: '21px !important',
            }}
          >
            PickerWheel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => handlePageClick(page)}>
                  <Typography textAlign="center">{page.title} &nbsp;</Typography>
                  {page.icon}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={NextLink}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pickerwheel
          </Typography>
          
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handlePageClick(page)}
                sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'flex-start' }}
              >
                {page.title} &nbsp;
                {page.icon}
              </Button>
            ))}
          </Box>

          <Box sx={{ display:'flex', flexGrow: 0 }}>
            <AppColorMode />
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}

            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;