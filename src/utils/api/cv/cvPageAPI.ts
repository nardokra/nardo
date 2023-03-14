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
}) => {
  const slug = "cv";
  const cvPageContent = await cmsClient<cvPage>(cvPageQuery, {
    slug,
  });

  if (!cvPageContent) ({ notFound: true });

  return {
    props: { ...cvPageContent, pageHref: `${req.headers.host}/${slug}` },
  };
};
