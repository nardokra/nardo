// Priority
import { InferGetStaticPropsType } from "next";

// Utils
import useLocalization from "@/utils/hooks/localization/useLocalization";
import { getStaticProps } from "@/utils/api/homepage/homepageAPI";

// Components
import Head from "next/head";
import { Layout } from "@/components/templates/layout";
import { Button } from "@/components/atoms/button";

const Home = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { localizations } = homepage;
  const content = useLocalization<typeof localizations[number]>(localizations);

  return (
    <div>
      <Head>
        <title>Nardo Kraaijeveld</title>
        <meta
          name="description"
          content="Welcome to the personal website of Nardo Kraaijeveld."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Button>{`${content?.title}`}</Button>
      </Layout>
    </div>
  );
};

export { getStaticProps };

export default Home;
