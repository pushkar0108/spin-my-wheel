import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

import Layout from '../components/Layout';
import { RANDOM_DECISION_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";
import FullscreenWheel from '../components/FullscreenWheel';

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
    </Layout>
  );
}