import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
      <FullscreenWheel />
    </Layout>
  );
}