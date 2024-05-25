import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Layout from '../components/Layout';
import { TRUTH_DARE_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const items = [
  {
    title: "Truth and Dare",
    subTitles: [
      "The Truth or Dare game has been a classic party staple for generations, known for bringing excitement, laughter, and even a little bit of embarrassment. With PickerWheel.in, you can now enjoy a Truth or Dare online game with family and friends. This digital twist allows you to spin the wheel and get a random truth or dare challenge, making it even more fun and unpredictable. Whether you're at a family gathering, a party with friends, or an intimate evening with your partner, our Truth or Dare online spin will elevate your game night."
    ]
  },
  {
    title: "What Do We Do in This Game?",
    subTitles: [
      "In the Truth or Dare game, players take turns spinning the wheel to receive a challenge. The wheel will randomly land on either &quot;Truth&quot; or &quot;Dare.&quot; If it lands on &quot;Truth,&quot; the player must answer a question honestly. If it lands on &quot;Dare,&quot; the player must complete a daring task. The questions and dares can range from light-hearted and funny to more serious and revealing, making it a versatile game for various occasions."
    ]
  },
  {
    title: "How to Play",
    subTitles: [
      "1. Gather Participants: Get your family, friends, or partner ready for some fun.",
      "2. Spin the Wheel: Use the Truth or Dare online spin to randomly select a truth or dare challenge.",
      "3. Complete the Challenge: If you land on &quot;Truth,&quot; answer the question honestly. If you land on &quot;Dare,&quot; complete the task.",
      "4. Next Player: After completing your challenge, pass the device to the next player and repeat the process.",
      "5. Customize: You can customize the wheel with your own truth or dare questions to make the game more personal and exciting."
    ]
  },
  {
    title: "Benefits of Playing Truth Wheel",
    subTitles: [
      "Fun and Entertainment: It&#39;s a great way to entertain guests and make any gathering more enjoyable.",
      "● Bonding: Helps to strengthen relationships by encouraging honesty and shared experiences.",
      "● Ice Breaker: Perfect for breaking the ice in new groups or settings.",
      "● Flexibility: Suitable for various age groups and settings, from family gatherings to parties with friends or even date nights.",
    ]
  },
  {
    title: "By the Coming of Digital World, It Shifted Online from Offline",
    subTitles: [
      "The traditional Truth or Dare game has seamlessly transitioned into the digital age. With the advent of online platforms, you can now play Truth or Dare games online free, making it accessible anytime and anywhere. This shift to digital means no more need for paper or verbal agreements – simply spin the wheel and let the game guide you. The Truth or Dare game online option allows you to connect and play with friends and family from different locations, bringing people together even when they are apart.",
    ]
  },
  {
    title: "What Are the Popular Truths and Dares",
    subTitles: [
      "Here are some popular Truth or Dare game questions and dares to get you started:",
      "Truths:",
      "● What&#39;s your most embarrassing moment?",
      "● Have you ever lied to get out of trouble?",
      "● What is your biggest fear?",
      "● Who is your secret crush?",
      "● What's the most daring thing you've ever done?",
      "Dares:",
      "● Sing your favorite song at the top of your lungs.",
      "● Do a funny dance for 30 seconds.",
      "● Post a silly selfie on social media.",
      "● Imitate a celebrity until someone guesses who you are.",
      "● Eat a spoonful of a spicy condiment.",
    ]
  },
  {
    title: "",
    subTitles: [
      "For those looking for a more adventurous game, you can include truth or dare questions to the pickerhwheel.in to add an extra layer of excitement and challenge."
    ]
  },
]

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

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSegments(TRUTH_DARE_DEFAULT_SEGMENTS)
    );
    dispatch(setSelectedPalette(9));
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="description" content="Spin the truth wheel to reveal random truth questions! Use our custom spin wheel generator for fun truth or dare games and icebreakers. Try it now!" />
        <title>Truth Wheel: Spin for Random Truths | PickerWheel</title>
      </Head>
      <FullscreenWheel />

      <Grid container spacing={2} className="mt-16 mb-16">
        <Grid item xs={12}>
          <Typography variant="h4" component="div" align="center">
            About the Game
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
  );
}