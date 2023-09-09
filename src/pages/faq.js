import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../components/Layout';
import "../app/globals.css";

const Component = ({ title, subTitle }) => {
  return (
    <Box>
      <Typography sx={{ mt: 2, mb: 1.5 }} variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {subTitle}
      </Typography>
    </Box>
  )
}

const items = [
  {
    title: "Can I share my wheel with others?",
    subTitle: "Yes, you can! We've written a helpful document that explains how to save and share your wheels."
  },
  {
    title: "Can I save the wheel I created?",
    subTitle: "The wheel you create on our home page is automatically saved for your next visit. You don't have to create an account or import/export anything. This happens completely automatically! If you want to create multiple wheels or save it to use it later (on a different device), you can create an account and save your wheel to your account."
  },
  {
    title: "Can I change how long the wheel spins?",
    subTitle: "Yes. Where you define the wheel slices, click the 'cog' icon to open up the wheel settings. There, you can change the duration of the spin."
  },
  {
    title: "Can I display more than one wheel running at the same time?",
    subTitle: "Not through our app but you can create two browser windows side-by-side and point them both to randomspinwheel.com."
  },
  {
    title: "How many entries can I add to the spinner wheel?",
    subTitle: "Our random spin wheels can support up to 2,000 entries. If you add more than 150 entries, the words won't be added on the wheel anymore (to preserve space so the wheel is still readable) but they are used to calculate the random result."
  },
  {
    title: "Can I use emojis in the wheels?",
    subTitle: "Yes, definitely! We think emojis make everything more fun so we encourage using them. Need to find a specific emoji? Here is a dictionary!"
  },
  {
    title: "Is it possible to cheat?",
    subTitle: "No! The wheel result is completely randomized. We do not run any pre-processing steps or other decision-making algorithms. The result the wheel lands on is chosen completely random and can not be rigged."
  },
]

class Home extends React.Component {
  render() {
    return (
      <Layout>

        <Grid container spacing={2} className="mt-16 mb-16">
          <Grid item xs={12}>
            <Typography variant="h4" component="div" align="center">
              Frequently Asked Questions
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
                      subTitle={item.subTitle}
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

export default Home;
