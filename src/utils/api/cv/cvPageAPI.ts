// Utils
import { GetServerSideProps } from "next";
import { cmsClient } from "../generic/cmsClient";
import { cvPageQuery } from "./cvPage.graphql";

// Types
import { CvPage } from "@/cmsTypes/hygraph";

type cvPage = {
  cvPage: CvPage;
};

export const getServerSideProps: GetServerSideProps<cvPage> = async () => {
  const props = await cmsClient<cvPage>(cvPageQuery, {
    slug: "cv",
  });

  if (!props) ({ notFound: true });

  return {
    props,
  };
};
