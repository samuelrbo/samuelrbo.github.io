import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export default ({
  postData
}: {
  postData: {
    title: string,
    date: string,
    contentHtml: string,
  },
}) => (
  <Layout>
    <Head>
      <title>404</title>
    </Head>
    <section>
      <h1>404 - Page Not Found</h1>
    </section>
  </Layout>
);
