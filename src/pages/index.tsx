import { useState } from "react";

// Types & Constants
import type { InferGetServerSidePropsType } from "next";
import { SvgElement, SvgImageVariants } from "@/components/atoms/svgImage";

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
import { EnrichedList } from "@/components/molecules/enrichedList";
import { ExtendedEnrichedList } from "@/components/molecules/extendedEnrichedList";
import { EnrichedIconList } from "@/components/molecules/enrichedIconList";
import { SizeVariant } from "@/constants/sizeConstants";

const Home = ({
  cvPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    contactList,
    educationList,
    experienceList,
    pageTitleBlock,
    privateImageBlock,
    profileImageBlock,
    skillsList,
  } = cvPage;

  const [item, setItem] = useState<keyof typeof SvgElement | undefined>(
    SvgImageVariants.NEXT
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

      <div
        className={cx(
          "absolute w-full",
          "flex justify-center",
          "bg-white p-1 sm:p-6"
        )}
      >
        <Layout>
          <LayoutBlock smColumns2>
            <LayoutBlock smColumns2>
              <ImageBrick imageBlock={profileImageBlock} priority />
              <TitleBrick titleBlock={pageTitleBlock} />
            </LayoutBlock>
            <LayoutBlock>
              <EnrichedIconList list={contactList} titleVerticalOriented />
            </LayoutBlock>
          </LayoutBlock>

          <LayoutBlock smColumns2>
            <LayoutBlock maxHeight>
              <ExtendedEnrichedList list={experienceList} />
            </LayoutBlock>
            <LayoutBlock smColumns2>
              <HoverList<typeof SvgElement>
                itemDefault={SvgImageVariants.NEXT}
                item={item}
                list={skillsList}
                setItem={setItem}
              />
              <LayoutBlock>
                <LogoDisplay>
                  <SvgImage variant={item} />
                </LogoDisplay>
                <ImageBrick
                  imageBlock={privateImageBlock}
                  size={SizeVariant.Medium}
                  priority
                />
              </LayoutBlock>
            </LayoutBlock>
          </LayoutBlock>

          <LayoutBlock>
            <EnrichedList titleVerticalOriented list={educationList} />
          </LayoutBlock>
        </Layout>
      </div>
    </>
  );
};

export { getServerSideProps };

export default Home;
