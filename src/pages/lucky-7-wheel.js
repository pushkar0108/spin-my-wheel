import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Layout from '../components/Layout';
import { LUCKY_7_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';

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
    </Layout>
  );
}