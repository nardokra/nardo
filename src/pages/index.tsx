// Priority
import { InferGetServerSidePropsType } from "next";

// Vars
import { ButtonVariants } from "@/components/atoms/button";

// Utils
import cx from "classnames";
import { getServerSideProps } from "@/utils/api/cv/cvPageAPI";

// Components
import Head from "next/head";
import { Layout } from "@/components/templates/layout";
import { Button } from "@/components/atoms/button";

const Home = ({
  cvPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { titleBlock } = cvPage;

  const classes = cx(
    "absolute h-full w-full flex justify-center bg-white pt-6 pb-6"
  );

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
          <Button variant={ButtonVariants.Ghost}>{titleBlock?.title}</Button>
        </Layout>
      </div>
    </>
  );
};

export { getServerSideProps };

export default Home;
