// Utils
import { GetServerSideProps } from "next";
import { cmsClient } from "@/utils/api/generic/cmsClient";
import { cvPageQuery } from "./cvPage.graphql";

// Types
import { CvPage } from "@/cmsTypes/hygraph";
import { localsQueryParams } from "@/utils/api/generic/localsQueryParams";

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

  const cvPageContent = await cmsClient<cvPage>(cvPageQuery, {
    slug,
    locale: localsQueryParams(locale, locales),
  });

  if (!cvPageContent) ({ notFound: true });

  return {
    props: { ...cvPageContent, pageHref: `www.${req.headers.host}` },
  };
};
