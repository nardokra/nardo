import { GetStaticProps } from "next";
import { cmsClient } from "../generic/cmsClient";
import { homepageQuery } from "./homepage.graphql";

type LocalizationType<T> = { localizations: Array<T> };

export type HomepagePropsType = {
  locale: string;
  id: string;
  slug: string;
  title?: string;
};

type HomepageType = {
  homepage: LocalizationType<HomepagePropsType>;
};

export const getStaticProps: GetStaticProps<HomepageType> = async () => {
  const props = await cmsClient<HomepageType>(homepageQuery, {
    slug: "home",
  });

  if (!props) ({ notFound: true });

  return {
    props,
  };
};
