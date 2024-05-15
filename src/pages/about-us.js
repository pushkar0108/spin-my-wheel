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
      {
        title && 
        <Typography sx={{ mt: 2, mb: 1.5 }} variant="h7" component="span">
          <b>{`${title} : `}</b>
        </Typography>
      }
      <Typography sx={{ mb: 1.5 }} color="text.secondary" component="span">
        {subTitles[0]}
      </Typography>
    </Box>
  )
}

const items = [
  {
    subTitles: [
      "Welcome to PickerWheel.in, the premier destination for all your spinning wheel needs! Whether you're hosting a game night, conducting a giveaway, or simply need help making a decision, PickerWheel has the tools you need to add an element of excitement to any occasion."
    ]
  },
  {
    title: "Endless Fun and Possibilities",
    subTitles: [
      "With PickerWheel, you can spin the wheel for endless entertainment. From classic games like spin the wheel and wheel of fortune to customized experiences tailored to your preferences, our platform offers a wide range of options to suit every need."
    ]
  },
  {
    title: "Create Your Own Custom Wheel",
    subTitles: [
      "With our custom spin wheel generator, you can design your very own spinning wheel with ease. Choose from a variety of themes, colors, and options to create a unique wheel that reflects your style and personality."
    ]
  },
  {
    title: "Fair and Random Results",
    subTitles: [
      "Our random picker ensures fair and unbiased outcomes every time you spin the wheel. Say goodbye to biased decisions and hello to random fun!"
    ]
  },
  {
    title: "Versatile Applications",
    subTitles: [
      "Whether you're using PickerWheel as a decision-making tool, a game spinner, or a prize generator, the possibilities are endless. Our platform is versatile and adaptable, making it perfect for a wide range of applications."
    ]
  },
  {
    title: "Easy to Use",
    subTitles: [
      "PickerWheel is designed to be user-friendly and intuitive, so you can start spinning the wheel with ease. Simply select your options, customize your wheel, and let the fun begin!",
    ]
  },
  {
    title: "Join Our Community",
    subTitles: [
      "Join thousands of satisfied users who trust PickerWheel to add excitement to their events and activities. Whether you're a seasoned host or a casual player, PickerWheel has something for everyone."
    ]
  },
  {
    title: "Get Started Today",
    subTitles: [
      "Ready to spin the wheel and see where it takes you? Head over to PickerWheel.in and start spinning today! Whether you're looking for a fun game, a helpful decision-making tool, or a unique way to choose winners, PickerWheel has you covered."
    ]
  },
  {
    title: "Unleash Your Creativity",
    subTitles: [
      "With our customizable options and personalized spin the wheel experiences, you can unleash your creativity and make every spin uniquely yours. From naming contests to truth or dare challenges, PickerWheel lets you create unforgettable moments with just a spin."
    ]
  },
  {
    title: "Join the Excitement",
    subTitles: [
      "Join the millions of users who have already discovered the thrill of spinning the wheel with PickerWheel. Whether you're hosting a party, planning an event, or simply looking for a fun way to pass the time, PickerWheel is your go-to destination for all things spinning wheel related."
    ]
  },
  {
    title: "Experience the Magic",
    subTitles: [
      "Experience the magic of PickerWheel and see where the wheel takes you. Whether you're looking for fun, excitement, or a little bit of both, PickerWheel has everything you need to make every spin a memorable one. So what are you waiting for? Start spinning today and let the fun begin!"
    ]
  },
]

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <meta name="description" content="Spin to win with Picker Wheel! Unleash your fortune with our fun, easy-to-use digital spinner. Perfect for games, decisions & giveaways. Try your luck now!" />
          <title>About  Us | PickerWheel</title>
        </Head>

        <Grid container spacing={2} className="mt-16 mb-16">
          <Grid item xs={12}>
            <Typography variant="h4" component="div" align="center">
              About Us
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
                    <br />
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
