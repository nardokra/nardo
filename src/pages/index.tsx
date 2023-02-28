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
  const content = useLocalization<typeof homepage.localizations[number]>(
    homepage.localizations
  );
  const { title } = content;

  const classes = "absolute h-full w-full flex justify-center bg-white";

  return (
    <>
      <Head>
        <title>Nardo Kraaijeveld</title>
        <meta
          name="description"
          content="Welcome to the personal website of Nardo Kraaijeveld."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes}>
        <Layout>
          <Button>{title}</Button>
        </Layout>
      </div>
    </>
  );
};

export { getStaticProps };

export default Home;
