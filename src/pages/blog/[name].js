import React from "react";
import Head from "next/head";
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import { BLOGS } from '../../config/constants';

export default function Blog({ }) {
    const content = BLOGS[0];

    return (
        <Layout>
            <Head>
                <meta name="description" content="Spin the truth wheel to reveal random truth questions! Use our custom spin wheel generator for fun truth or dare games and icebreakers. Try it now!" />
                <title>Truth Wheel: Spin for Random Truths | PickerWheel</title>
            </Head>

            <BlogPost
                imageSrc={content.imageSrc}
                title={content.title}
                subTitle={content.subTitles}
                content={content.content}
            />

        </Layout>
    );
}