import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Layout from '../components/Layout';
import { LUCKY_7_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';
import TextContent from '../components/TextContent';

const items = [
  {
    title: "",
    subTitles: [
      "The Lucky 7 Wheel Game is an exciting and engaging online game where players spin a wheel divided into segments numbered 1 through 7. This game of chance is perfect for parties, gatherings, or just a fun time with friends and family. Available as a Lucky 7 wheel game online free, it offers endless entertainment without the need for any physical equipment. The goal is simple: spin the wheel and see where your luck takes you!"
    ]
  },
  {
    title: "How It Works",
    subTitles: [
      "The Lucky 7 Wheel Game operates through a digital interface that simulates a spinning wheel. Each segment on the wheel represents a number from 1 to 7. Players take turns spinning the wheel, and the number it lands on determines the outcome of each round. The game can be customized with different rules and variations, making it versatile and adaptable for various occasions."
    ]
  },
  {
    title: "How to Play",
    subTitles: [
      "1. Set Up: Access the Lucky 7 wheel game online.",
      "2. Understand the Rules: Familiarize yourself with the Lucky 7 wheel game rules, which can vary depending on the version you are playing.",
      "3. Spin the Wheel: Players take turns clicking the &quot;Spin&quot; button to rotate the wheel.",
      "4. Result: Once the wheel stops, the pointer will indicate the winning number.",
      "5. Outcome: Based on the game version, the number landed on will determine the next action (e.g., assigning points, performing tasks, or progressing in a game).",
    ]
  },
  {
    title: "Benefits of Playing",
    subTitles: [
      "● Fun and Entertainment: The game is simple yet thrilling, perfect for adding excitement to any gathering.",
      "● Versatility: It can be customized to suit different themes and rules, making it adaptable for various occasions.",
      "● No Equipment Needed: As a Lucky 7 wheel game online free, it requires no physical materials, making it convenient and easy to play anywhere.",
      "● Engagement: Keeps players engaged and entertained, promoting interaction and enjoyment among participants.",
      "● Luck-Based: The game relies on luck, ensuring that everyone has an equal chance of winning regardless of skill level.",
    ]
  },
  {
    title: "What are the Possible Different Games that We Can Do in This Game?",
    subTitles: [
      "1. Points Accumulation: Players accumulate points based on the numbers they land on, with a set target to win.",
      "2. Task Assignment: Each number corresponds to a specific task or dare that the player must complete.",
      "3. Prize Allocation: Use the wheel to determine the winner of prizes in a raffle or giveaway.",
      "4. Decision Making: Simplify decision-making by assigning options to each number and spinning to choose.",
      "5. Educational Games: Use the wheel to quiz participants, with each number corresponding to a question or challenge.",
    ]
  },
  {
    title: "How to Customize the Numbers/Game",
    subTitles: [
      "● Personalize Numbers: Customize the segments of the wheel by assigning different tasks, points, or outcomes to each number.",
      "● Themes and Colors: Change the appearance of the wheel with different themes and colors to match the occasion or event.",
      "● Sound Effects: Enhance the gaming experience by adding sound effects that play when the wheel spins and stops.",
      "● Game Rules: Modify the Lucky 7 wheel game rules to create unique variations and challenges, tailored to your group’s preferences.",
      "● Save and Share: Save your customized wheel settings and share them with friends and family to enjoy your personalized Lucky 7 wheel game online.",
    ]
  },
  {
    title: "",
    subTitles: [
      "By offering these customizable options, the Lucky 7 Wheel Game ensures a unique and enjoyable experience every time you play. Whether you&#39;re looking for a casual game to pass the time or an exciting addition to your party, the Lucky 7 wheel game free provides endless fun and possibilities.",
    ]
  },
]

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSegments(LUCKY_7_DEFAULT_SEGMENTS)
    );
    dispatch(setSelectedPalette(7));
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="description" content="Lucky 7 Wheel: Spin to Win! Explore endless possibilities with our dynamic digital spinner. Ideal for games, decisions, and giveaways. Test your luck today!" />
        <title>Lucky 7 Wheel: Spin for Lucky Numbers | PickerWheel</title>
      </Head>
      <FullscreenWheel />
      <TextContent 
        title={"What is the Lucky 7 Wheel Game?"}
        items={items}
      />
    </Layout>
  );
}