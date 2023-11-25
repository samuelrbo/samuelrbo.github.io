import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from 'react';

export default ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  const [openStyle, setOpenStyle] = useState<string>('');

  setInterval(() => {
    openStyle === 'open' ? setOpenStyle('') : setOpenStyle('open');
  }, 3000);

  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <section className={`${utilStyles.centerContent}`}>
        <div className={`book ${openStyle}`}>
          <div className='back'></div>
          <div className='page6'>
            <p>Page Not Found</p>
          </div>
          <div className='page5'>
            <p>404</p>
          </div>
          <div className='page4'></div>
          <div className='page3'></div>
          <div className='page2'></div>
          <div className='page1'></div>
          <div className='front'>
            <h1 className=' title'>Error</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};
