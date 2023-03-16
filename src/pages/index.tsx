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
import { DynamicHead } from "@/components/templates/dynamicHead";
import { TextCircle } from "@/components/atoms/textCircle/TextCircle";

const Home = ({
  cvPage,
  pageHref,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    contactList,
    educationList,
    experienceList,
    pageTitleBlock,
    privateImageBlock,
    profileImageBlock,
    seoAndOpenGraph,
    skillsList,
    websiteList,
  } = cvPage;

  const [activeSkillItem, setActiveSkillItem] = useState(
    isInterActive ? SvgImageVariants.NEXT : undefined
  );

  return (
    <>
      <DynamicHead
        metaDescription={seoAndOpenGraph?.metaDescription}
        metaTitle={seoAndOpenGraph?.metaTitle}
        ogImageUrl={profileImageBlock?.imageEntry?.[0]?.image?.url}
        ogTwitterCard={seoAndOpenGraph?.twitterCard}
        ogUrl={pageHref}
      />

      <div
        className={cx(
          "absolute w-full",
          "flex justify-center",
          "bg-white p-1 sm:p-6"
        )}
      >
        <Layout>
          <LayoutBlock smColumns2>
            <LayoutBlock>
              <LayoutBlock smColumns2>
                <ImageBrick imageBlock={profileImageBlock} />
                <TextCircle
                  className="hidden sm:flex"
                  title={pageTitleBlock?.title}
                />
              </LayoutBlock>
              <LayoutBlock>
                <TitleBrick titleBlock={pageTitleBlock} />
              </LayoutBlock>
            </LayoutBlock>
            <LayoutBlock>
              <TopicMediaList
                anchorList
                list={contactList}
                titleVerticalOriented
              />
              <TopicMediaList
                anchorList
                isHighlight
                list={websiteList}
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
                  size={SizeVariant[isInterActive ? "Small" : "Medium"]}
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
