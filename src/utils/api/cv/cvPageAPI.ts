// Utils
import { GetServerSideProps } from "next";
import { cmsClient } from "../generic/cmsClient";
import { cvPageQuery } from "./cvPage.graphql";

// Types
import { CvPage } from "@/cmsTypes/hygraph";

type cvPage = {
  cvPage: CvPage;
  pageHref: string;
};

export const getServerSideProps: GetServerSideProps<cvPage> = async ({
  req,
  locale,
  locales,
}) => {
  const slug = "cv";
  const fallBackLocales =
    locales?.map((loc) => loc.slice(0, 2)).filter((loc) => loc !== locale) ||
    [];

  const cvPageContent = await cmsClient<cvPage>(cvPageQuery, {
    slug,
    locale: [locale, ...fallBackLocales],
  });

  if (!cvPageContent) ({ notFound: true });

  return {
    props: { ...cvPageContent, pageHref: `www.${req.headers.host}` },
  };
};
