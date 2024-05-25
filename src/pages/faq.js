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
    title: "What is PickerWheel.in?",
    subTitles: [
      "PickerWheel.in is an online platform that allows users to create and customize spinning wheels for various purposes, including games, decision-making, giveaways, and more."
    ]
  },
  {
    title: "How does PickerWheel.in work?",
    subTitles: [
      "PickerWheel lets you create a spinning wheel by adding options such as names, numbers, prizes, or choices. Once the wheel is customized, you can spin it to randomly select an option."
    ]
  },
  {
    title: "Can I customize the spinning wheel? ",
    subTitles: [
      "Yes, PickerWheel offers customization options such as choosing colors, themes, and adding text or images to personalize your spinning wheel."
    ]
  },
  {
    title: "Can I change the sound of the spinning wheel?",
    subTitles: [
      "Yes, Enhance your spinning wheel experience with customized sound effects! PickerWheel offers the option to personalize the sound of your spinning wheel, adding an extra layer of excitement and immersion to every spin. Choose from a selection of fun and engaging sound effects to accompany the spinning motion, from classic clicking sounds to whimsical chimes. Whether you prefer a subtle background noise or an attention-grabbing tune, you can tailor the sound of your spinning wheel to suit your preferences and create a truly immersive experience for yourself and your audience."
    ]
  },
  {
    title: "What can I use PickerWheel.in for? ",
    subTitles: [
      "PickerWheel can be used for a wide range of purposes, including:",
      "● Hosting game nights: Spin the wheel to choose games or determine winners.",
      "● Decision-making: Use the wheel to make fair and random decisions.",
      "● Giveaways and contests: Select winners randomly for giveaways or contests.",
      "● Classroom activities: Engage students by using the wheel for quizzes, discussions, or assigning tasks.",
    ]
  },
  {
    title: "Is PickerWheel.in free to use? ",
    subTitles: [
      "Yes, PickerWheel offers a free version with all the features. We do not charge anyone to use Pickerwheel.in."
    ]
  },
  {
    title: "Is PickerWheel.in mobile-friendly?",
    subTitles: [
      "Yes, PickerWheel is optimized for mobile devices, allowing you to create and spin wheels on smartphones and tablets."
    ]
  },
  {
    title: "Can I share my spinning wheel with others?",
    subTitles: [
      "Yes, PickerWheel provides options to share your spinning wheel with others via a unique URL or embedding it on your website or blog."
    ]
  },
  {
    title: "Is there a limit to the number of options I can add to the wheel?",
    subTitles: [
      "No there is no limit but we recommend not to go beyond 30 options.."
    ]
  },
  {
    title: "Is there a way to prevent bias in the selection process?",
    subTitles: [
      "Yes, PickerWheel uses advanced algorithms to ensure fair and unbiased results every time you spin the wheel, eliminating any potential bias in the selection process."
    ]
  },
  {
    title: "How secure is PickerWheel? ",
    subTitles: [
      "PickerWheel takes security seriously and implements measures to protect user data and privacy. Your information is encrypted and stored securely, and we adhere to strict privacy policies to safeguard your personal information."
    ]
  },
  {
    title: "Can someone cheat the wheel?",
    subTitles: [
      "No, PickerWheel.in is designed to ensure fair and random outcomes. The wheel uses advanced algorithms to provide unbiased results, making it nearly impossible to manipulate or cheat."
    ]
  },
  {
    title: "When to use Virtual Picker Wheel?",
    subTitles: [
      "Use the Virtual Picker Wheel whenever you need to make a random selection. It’s perfect for decision-making, classroom activities, giveaways, party games, or any situation where you need an unbiased choice."
    ]
  },
  {
    title: "Can I customize the appearance of the wheel?",
    subTitles: [
      "Yes, you can fully customize the appearance of the wheel. Choose from a variety of colors, themes, and sound effects to make the wheel uniquely yours. You can also add text and images to personalize it further."
    ]
  },
  {
    title: "Can I save or share the wheels I create?",
    subTitles: [
      "Yes, you can save your custom wheels for future use. Additionally, you can share your wheels with others via a unique URL or by embedding them on your website or blog."
    ]
  },
  {
    title: "What kind of themes and sounds can I choose for my wheel?",
    subTitles: [
      "PickerWheel offers a variety of themes and sound effects to enhance your spinning experience. You can choose from different color schemes, backgrounds, and sound effects to make the wheel more engaging and fun."
    ]
  },
  {
    title: "How accurate is the random selection process of PickerWheel?",
    subTitles: [
      "The random selection process of PickerWheel is highly accurate, using advanced algorithms to ensure each spin is completely random and fair, without any influence from previous spins."
    ]
  },
  {
    title: "Are there any age restrictions for using PickerWheel?",
    subTitles: [
      "PickerWheel is suitable for users of all ages. However, we recommend parental guidance for younger children to ensure they use the tool appropriately and safely."
    ]
  },
  {
    title: "Is there a way to retrieve past results from a spin?",
    subTitles: [
      "Currently, PickerWheel does not store past spin results. Each spin is independent, and the results are not saved unless you manually record them."
    ]
  },
  {
    title: "Is there a limit to the number of times I can spin the wheel?",
    subTitles: [
      "No, there is no limit to the number of times you can spin the wheel. You can use PickerWheel as often as you need for making decisions, playing games, or any other purpose."
    ]
  },
]

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <meta name="description" content="Get all your questions answered about PickerWheel on our comprehensive FAQ page. Find the information that all you need quickly and easily. Explore now!" />
          <title>Answers to Your Questions | PickerWheel</title>
        </Head>
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

export default Home;
