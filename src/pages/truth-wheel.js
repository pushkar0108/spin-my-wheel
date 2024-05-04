import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <FullscreenWheel />
    </Layout>
  );
}