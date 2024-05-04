import React from "react";
import Layout from '../components/Layout';
import HowToUse from '../components/HowToUse';
import WhatToUse from '../components/WhatToUse';
import FullscreenWheel from '../components/FullscreenWheel';

export default function Home() {
  return (
    <Layout>
      <FullscreenWheel />
      <HowToUse />
      <WhatToUse />
    </Layout>
  );
}