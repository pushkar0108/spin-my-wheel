import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

import Layout from '../components/Layout';
import { RANDOM_DECISION_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';
import TextContent from '../components/TextContent';

const items = [
  {
    title: "",
    subTitles: [
      "Welcome to PickerWheel.in, the ultimate online spinning wheel platform designed to make decision-making fun and effortless. Whether you need to make a quick decision, play a game, or add excitement to your events, our customizable decision wheel has you covered. With our random decision wheel, you can spin the wheel online to choose from multiple options, ensuring a fair and unbiased outcome every time. Perfect for personal use, parties, classrooms, and more, PickerWheel.in is your go-to random choice generator."
    ]
  },
  {
    title: "How It Works",
    subTitles: [
      "Using PickerWheel.in is simple and intuitive:",
      "1. Create Your Wheel: Enter the options you want to include in your wheel.",
      "2. Customize: Personalize the wheel with colors, sounds, and themes to match your needs.",
      "3. Spin the Wheel: Click the spin button and let the wheel randomly select an option for you.",
      "4. Use the Result: Follow the chosen option to make your decision or complete your task.",
    ]
  },
  {
    title: "Features and Benefits of This Game",
    subTitles: [
      "● Random Decision Wheel: Ensures a fair and unbiased selection process.",
      "● Customizable Decision Wheel: Personalize with your own options, colors, and themes.",
      "● Fun Decision Wheel: Makes decision-making entertaining and engaging.",
      "● Versatile Use: Suitable for games, decision-making, educational purposes, and more.",
      "● Easy to Use: Simple interface allows anyone to create and spin their own wheel quickly.",
      "● Online Spinning Wheel: Accessible from any device with internet access.",
      "● Random Picker Wheel: Ideal for raffles, giveaways, and random selections.",
      "● Secure and Private: Your custom wheels are saved securely for future use.",
    ]
  },
  {
    title: "Popular Wheels",
    subTitles: [
      "Explore a variety of popular wheels available on PickerWheel.in:",
      "● Truth or Dare: Spice up your gatherings with a fun Truth or Dare wheel.",
      "● What to Eat: Decide on meals effortlessly with our meal picker wheel.",
      "● Activities for the Weekend: Plan your weekend activities with a random selection of fun ideas.",
      "● Study Break Ideas: Choose from different study break activities to refresh your mind.",
    ]
  },
]

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSegments(RANDOM_DECISION_DEFAULT_SEGMENTS)
    );
    dispatch(setSelectedPalette(7));
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="description" content="Use our random decision wheel as a quick and easy decision-making tool! Customize the wheel spinner for yes/no choices, contests, and more. Try it now!" />
        <title>Random Decision Wheel: Decision-Making Tool | PickerWheel</title>
      </Head>
      <FullscreenWheel />
      <TextContent 
        title={"What is the Lucky 7 Wheel Game?"}
        items={items}
      />
    </Layout>
  );
}