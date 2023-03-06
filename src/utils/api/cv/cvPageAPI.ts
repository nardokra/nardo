import { GetStaticProps } from "next";
import { cmsClient } from "../generic/cmsClient";
import { cvPageQuery } from "./cvPage.graphql";

type ImageEntry = {
  image: {
    url: string;
  };
  altText: string;
  identifier: string;
};

type TitleBlock = {
  title: string;
  subTitle: string;
  subSubTitle: string;
};

export type CvPropsType = {
  locale: string;
  id: string;
  slug: string;
  titleBlock?: TitleBlock;
  profileImageBlock?: ImageEntry[];
};

type CvType = {
  cvPage: CvPropsType;
};

export const getStaticProps: GetStaticProps<CvType> = async ({ locale }) => {
  const props = await cmsClient<CvType>(cvPageQuery, {
    local: locale,
    slug: "cv",
  });

  if (!props) ({ notFound: true });

  return {
    props,
  };
};
