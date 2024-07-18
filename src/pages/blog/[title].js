import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import { BLOGS } from '../../config/constants';

export default function Blog({ }) {
    const router = useRouter();
    const blogName = router.query.title;
    const blog = BLOGS.find(blog => blog.title == blogName);

    return (
        <Layout>
            <Head>
                <meta name="description" content={blog?.subTitles} />
                <title>{blog?.title}</title>
            </Head>

            {
                blog ? 
                <BlogPost
                    date={blog.date}
                    imageSrc={blog.imageSrc}
                    title={blog.title}
                    subTitle={blog.subTitles}
                    content={blog.content}
                /> :
                <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="80vh">
                    <Typography variant="h5">Blog not found!</Typography>
                </Box>
            }

        </Layout>
    );
}