import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getCareerSummary } from '../lib/index';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default ({
  allPostsData,
  careerSummary,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  careerSummary: {
    title: string;
    contentHtml: string;
  };
}) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className={utilStyles.headingMd}>
      <h3>{careerSummary.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: careerSummary.contentHtml }} />
    </section>

    {Array.isArray(allPostsData) && allPostsData.length > 0 && (
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    )}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const careerSummary = await getCareerSummary();

  return {
    props: {
      allPostsData,
      careerSummary,
    },
  };
};
