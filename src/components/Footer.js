import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Image from 'next/image';
import * as NextLink from 'next/link';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const NavigationList = ({ title, list, href }) => {
  return (
    <div className="m-4">
      <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
        {title}
      </Typography>
      {
        list.map(item => {
          const {title, href = "dada"} = item;
          return (
              <Typography key={title} variant="caption" component="div">
                <Link component={NextLink} underline='hover' href={href} color="text.primary">
                  {title}
                </Link>
              </Typography>
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
          <Grid item xs={12} md={4}>
            <div className="m-4">
              <Image
                className="mr-4"
                src="/images/wheel_icon.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <Typography sx={{ mb: 1.5 }} variant="caption" color="text.secondary">
                Let&apos;s give the wheel a Spin! <br/>
                Happy Spinning!
              </Typography>
              <Box sx={{ mt: 1.5 }}>
                <a href='https://www.instagram.com/pickerwheel.in/' target='_blank'>
                  <InstagramIcon sx={{ mr: 1 }} />
                </a>
                <a href='https://www.facebook.com/profile.php?id=61559167377801&mibextid=LQQJ4d' target='_blank'>
                  <FacebookIcon sx={{ mr: 1 }} />
                </a>
                {/* <LinkedInIcon sx={{ mr: 1 }} />
                <TwitterIcon sx={{ mr: 1 }} /> */}
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <NavigationList 
              title="Ready-made wheels"
              list={[
                {title: "Truth & Dare wheel", href: "/truth-wheel"},
                {title: "Lucky 7 wheel", href: "/lucky-7-wheel"},
                {title: "Random Decision wheel", href: "/random-decision-wheel"},
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <NavigationList 
              title="Explore Community"
              list={[
                {title: "About us", href: "/about-us"},
                {title: "Our terms", href: "/terms"},
                {title: "FAQs", href: "/faq"},
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Footer;