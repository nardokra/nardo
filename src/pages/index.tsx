import { useState } from "react";

// Types & Constants
import type { InferGetServerSidePropsType } from "next";
import { SizeVariant } from "@/constants/sizeConstants";
import { SvgImageVariants } from "@/components/atoms/svgImage";

// Utils
import cx from "classnames";
import { getServerSideProps } from "@/utils/api/cv/cvPageAPI";

// Components
import Head from "next/head";
import { Layout } from "@/components/templates/layout";
import { ImageBrick } from "@/components/molecules/imageBrick";
import { TitleBrick } from "@/components/atoms/titleBrick";
import { SvgImage } from "@/components/atoms/svgImage";
import { LayoutBlock } from "@/components/templates/layoutBlock";
import { LogoDisplay } from "@/components/molecules/logoDisplay";
import { HoverList } from "@/components/molecules/hoverList";

const Home = ({
  cvPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { titleBlock, profileImageBlock, skillsList, privateImageBlock } =
    cvPage;

  const [item, setItem] =
    useState<typeof SvgImageVariants[keyof typeof SvgImageVariants]>();

  const mainClasses = cx(
    "absolute w-full flex justify-center bg-white pt-6 pb-6"
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

      <div className={mainClasses}>
        <Layout>
          <LayoutBlock>
            <ImageBrick imageBlock={profileImageBlock} />
            <TitleBrick titleBlock={titleBlock} />
          </LayoutBlock>
          <LayoutBlock>
            <LayoutBlock size={SizeVariant.Small}>
              <HoverList list={skillsList} setItem={setItem} />
            </LayoutBlock>

            <LayoutBlock size={SizeVariant.Small}>
              <LogoDisplay>
                <SvgImage variant={item} />
              </LogoDisplay>
              <ImageBrick
                imageBlock={privateImageBlock}
                size={SizeVariant.Medium}
              />
            </LayoutBlock>
          </LayoutBlock>
        </Layout>
      </div>
    </>
  );
};

export { getServerSideProps };

export default Home;
