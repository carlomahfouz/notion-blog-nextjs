import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {QRCodeSVG} from 'qrcode.react';

import {
  getDatabase, getBlocks, getPageFromSlug, getPage,
} from '../../../lib/notion';
import Text from '../../../components/text';
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => {
    const slug = page.properties.Slug?.formula?.string;
    return ({ id: page.id, slug });
  });
}

export default async function Page({ params }) {
  const page = await getPage(params?.slug);
  const blocks = await getBlocks(page?.id);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Head>
        <title>{page.properties.Name?.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="">
        <div>{page.properties.Name?.title[0].plain_text}</div>
        <QRCodeSVG value="https://reactjs.org/" />
        <section>
          <Link href="/" className="">
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => {
//       const slug = page.properties.Slug?.formula?.string;
//       return ({ params: { id: page.id, slug } });
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   return {
//     props: {
//       page,
//       blocks,
//     },
//     revalidate: 1,
//   };
// };
