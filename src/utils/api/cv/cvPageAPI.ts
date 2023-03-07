import { GetServerSideProps } from "next";
import { cmsClient } from "../generic/cmsClient";
import { cvPageQuery } from "./cvPage.graphql";
import { CvPage } from "@/cmsTypes/hygraph";

type cvPage = {
  cvPage: CvPage;
};

export const getServerSideProps: GetServerSideProps<cvPage> = async ({
  locale,
}) => {
  const props = await cmsClient<cvPage>(cvPageQuery, {
    local: locale,
    slug: "cv",
  });

  if (!props) ({ notFound: true });

  return {
    props,
  };
};
