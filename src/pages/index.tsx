// Types
import { InferGetServerSidePropsType } from "next";

// Utils
import cx from "classnames";
import { getServerSideProps } from "@/utils/api/cv/cvPageAPI";

// Components
import Head from "next/head";
import { Layout } from "@/components/templates/layout";
import { ImageBrick } from "@/components/molecules/imageBrick";
import { TitleBrick } from "@/components/atoms/titleBrick";
import { SvgImage, SvgImageVariants } from "@/components/atoms/svgImage";

const Home = ({
  cvPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { titleBlock, profileImageBlock } = cvPage;

  const classes = cx("absolute w-full flex justify-center bg-white pt-6 pb-6");

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
          <ImageBrick imageBlock={profileImageBlock} />
          <TitleBrick titleBlock={titleBlock} />
          <SvgImage variant={SvgImageVariants.CSS3} />
        </Layout>
      </div>
    </>
  );
};

export { getServerSideProps };

export default Home;
