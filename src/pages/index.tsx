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
        <Button>{title}</Button>
      </Layout>
    </div>
  );
};

export { getStaticProps };

export default Home;
