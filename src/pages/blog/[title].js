import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import { BLOGS } from '../../config/constants';

export default function Blog({ }) {
    const router = useRouter()
    const blog = BLOGS.find(blog => blog.title == router.query.title);
    debugger

    return (
        <Layout>
            <Head>
                <meta name="description" content="Spin the truth wheel to reveal random truth questions! Use our custom spin wheel generator for fun truth or dare games and icebreakers. Try it now!" />
                <title>Truth Wheel: Spin for Random Truths | PickerWheel</title>
            </Head>

            <BlogPost
                date={blog.date}
                imageSrc={blog.imageSrc}
                title={blog.title}
                subTitle={blog.subTitles}
                content={blog.content}
            />

        </Layout>
    );
}