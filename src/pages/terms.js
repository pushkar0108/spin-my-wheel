import React from "react";
import Head from "next/head";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../components/Layout';
import "../app/globals.css";

const Component = ({ title, subTitles }) => {
  return (
    <Box>
      <Typography sx={{ mt: 2, mb: 1.5 }} variant="h5" component="div">
        {title}
      </Typography>
      <ul>
        {
          subTitles.map(subTitle => {
            return (
              <li key={subTitle}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {subTitle}
                </Typography>
              </li>
            )
          })
        }
      </ul>
    </Box>
  )
}

const items = [
  {
    title: "These terms and conditions outline the rules and regulations for the use of pickerwheel.in.",
    subTitles: [
      "By accessing this website, we assume you accept these terms and conditions. Do no continue to use pickerwheel.in if you do not agree to take all of the terms and conditions stated on this page."
    ]
  },
  {
    title: "Cookies:",
    subTitles: [
      "We employ the use of cookies. By accessing pickerwheel.in, you agreed to use cookies in agreement with the pickerwheel.in's Privacy Policy."
    ]
  },
  {
    title: "License:",
    subTitles: [
      "Unless otherwise stated, pickerwheel.in and/or its licensors own the intellectual property rights for all material on pickerwheel.in. All intellectual property rights are reserved. You may access this from pickerwheel.in for your own personal use subjected to restrictions set in these terms and conditions."
    ]
  },
  {
    title: "Restrictions:",
    subTitles: [
      "You are specifically restricted from all of the following:",
      "● Publishing any pickerwheel.in material in any other media;",
      "● Selling, sublicensing, and/or otherwise commercializing any pickerwheel.in material;",
      "● Publicly performing and/or showing any pickerwheel.in material;",
      "● Using this website in any way that is or may be damaging to this website;",
      "● Using this website in any way that impacts user access to this website;",
      "● Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;",
      "● Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;",
      "● Using this website to engage in any advertising or marketing.",
    ]
  },
  {
    title: "Disclaimer:",
    subTitles: [
      "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:",
      "● Limit or exclude our or your liability for death or personal injury;",
      "● Limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
      "● Limit any of our or your liabilities in any way that is not permitted under applicable law; or",
      "● Exclude any of our or your liabilities that may not be excluded under applicable law.",
    ]
  },
  {
    title: "Privacy:",
    subTitles: [
      "Your privacy is important to us. Please read our Privacy Policy here."
    ]
  },
  {
    title: "Reservation of Rights:",
    subTitles: [
      "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
    ]
  },
  {
    title: "Removal of links from our website:",
    subTitles: [
      "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly."
    ]
  },
  {
    title: "Governing Law &amp; Jurisdiction:",
    subTitles: [
      "These terms will be governed by and interpreted in accordance with the laws of the State of Delhi, and you submit to the non-exclusive jurisdiction of the courts located in India for the resolution of any disputes."
    ]
  },
]

class Terms extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <meta name="description" content="Get all your questions answered about PickerWheel on our comprehensive FAQ page. Find the information that all you need quickly and easily. Explore now!" />
          <title>Terms and Conditions | PickerWheel</title>
        </Head>
        <Grid container spacing={2} className="mt-16 mb-16">
          <Grid item xs={12}>
            <Typography variant="h4" component="div" align="center">
              Terms and Conditions
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="space-evenly">
            {
              items.map((item, i) => {
                return (
                  <Grid key={item.title} item xs={8}>
                    <Component
                      index={i + 1}
                      title={item.title}
                      subTitles={item.subTitles}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default Terms;
