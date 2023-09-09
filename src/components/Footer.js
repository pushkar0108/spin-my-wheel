import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from '@mui/material/Link';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const NavigationList = ({ title, list }) => {
  return (
    <div className="m-4">
      <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
        {title}
      </Typography>
      {
        list.map(item => {
          return (
            <Link key={item} href="#" underline="hover">
              <Typography variant="caption" component="div">
                {item}
              </Typography>
            </Link>
          )
        })
      }
    </div>
  )
};

function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Grid container justifyContent="space-evenly">
          <Grid item xs={12} md={3}>
            <div className="m-4">
              <Image
                className="mr-4"
                src="/images/wheel_icon.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <Typography sx={{ mb: 1.5 }} variant="caption" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
              <Box sx={{ mt: 1.5 }}>
                <InstagramIcon sx={{ mr: 1 }} />
                <FacebookIcon sx={{ mr: 1 }} />
                <LinkedInIcon sx={{ mr: 1 }} />
                <TwitterIcon sx={{ mr: 1 }} />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <NavigationList 
              title="Ready-made wheels"
              list={[
                "Random name wheels",
                "Geography wheels",
                "Random decision makers",
                "Random number generators",
                "Random letter generators",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <NavigationList 
              title="Explore Community"
              list={[
                "Go pro",
                "Latest updates",
                "About us",
                "This site",
                "Contact Us",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <NavigationList 
              title="Insight Community"
              list={[
                "Global partners",
                "Virtual World",
                "Community",
                "Brand Assets",
                "Forum",
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Footer;