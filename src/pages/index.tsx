import { useState } from "react";

// Types
import type { InferGetServerSidePropsType } from "next";

// Constants
import { SvgElement, SvgImageVariants } from "@/components/atoms/svgImage";
import { isInterActive } from "@/constants/conditionalConstants";

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
import { TopicDescriptionList } from "@/components/molecules/topicDescriptionList";
import { TopicDoubleDescriptionList } from "@/components/molecules/topicDoubleDescriptionList";
import { TopicMediaList } from "@/components/molecules/topicMediaList";
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
    websiteList,
  } = cvPage;

  const [activeSkillItem, setActiveSkillItem] = useState(
    isInterActive ? SvgImageVariants.NEXT : undefined
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
              <TopicMediaList
                anchorList
                list={contactList}
                titleVerticalOriented
              />
            </LayoutBlock>
          </LayoutBlock>
          <LayoutBlock smColumns2>
            <LayoutBlock maxHeight>
              <TopicDoubleDescriptionList list={experienceList} />
            </LayoutBlock>
            <LayoutBlock smColumns2>
              <HoverList<typeof SvgElement>
                itemDefault={SvgImageVariants.NEXT}
                item={activeSkillItem}
                list={skillsList}
                setItem={setActiveSkillItem}
              />
              <LayoutBlock>
                {isInterActive && (
                  <LogoDisplay>
                    <SvgImage variant={activeSkillItem} />
                  </LogoDisplay>
                )}
                <ImageBrick
                  imageBlock={privateImageBlock}
                  priority
                  size={SizeVariant[isInterActive ? "Small" : "Medium"]}
                />
                <TopicMediaList
                  anchorList
                  isHighlight
                  list={websiteList}
                  titleVerticalOriented
                />
              </LayoutBlock>
            </LayoutBlock>
          </LayoutBlock>
          <LayoutBlock>
            <TopicDescriptionList titleVerticalOriented list={educationList} />
          </LayoutBlock>
        </Layout>
      </div>
    </>
  );
};

export { getServerSideProps };

export default Home;
