import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Head from "next/head";
import Layout from '../../components/Layout';
import MediaCard from '../../components/MediaCard';
import { BLOGS } from '../../config/constants';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Spin the truth wheel to reveal random truth questions! Use our custom spin wheel generator for fun truth or dare games and icebreakers. Try it now!" />
        <title>Truth Wheel: Spin for Random Truths | PickerWheel</title>
      </Head>
      <Grid container sx={{ mt: 4, mb: 8 }}>
        <Grid item xs={12}>
          <Typography variant="h5" component="div" align="center">
            BLOG
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
            Discover more, learn more, and grow with our insights
          </Typography>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          {
            BLOGS.map((item, i) => {
              return (
                <Grid key={item.title} item xs={12} md={4}>
                  <MediaCard 
                    date={item.date}
                    imageSrc={item.imageSrc} 
                    title={item.title} 
                    subTitle={item.subTitles} 
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