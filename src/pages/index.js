import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from '../components/Layout';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import FullscreenWheel from '../components/FullscreenWheel';
import { YES_NO_DEFAULT_SEGMENTS } from '../config/constants';
import { setSegments, setSelectedPalette } from "../redux/features/appSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSegments(YES_NO_DEFAULT_SEGMENTS)
    );
    dispatch(setSelectedPalette(0));
  }, []);

  return (
    <Layout>
      <FullscreenWheel />
      <HowToUse />
      <WhatToUse />
    </Layout>
  );
}