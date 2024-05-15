import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Layout from '../components/Layout';
import { TRUTH_DARE_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';

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
    </Layout>
  );
}