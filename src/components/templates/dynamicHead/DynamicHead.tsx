// Types
import { Maybe } from "@/cmsTypes/hygraph";

// Components
import Head from "next/head";

type DynamicHeadType = {
  metaDescription?: Maybe<string>;
  metaTitle?: Maybe<string>;
  ogImageUrl?: Maybe<string>;
  ogTwitterCard?: Maybe<string>;
  ogUrl: string;
};

export const DynamicHead = ({
  metaDescription,
  metaTitle,
  ogImageUrl,
  ogTwitterCard,
  ogUrl,
}: DynamicHeadType) => (
  <Head>
    {!!metaTitle && (
      <>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
      </>
    )}
    {!!metaDescription && (
      <>
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </>
    )}
    {!!ogUrl && <meta property="og:url" content={ogUrl} />}
    {!!ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
    {!!ogTwitterCard && <meta name="twitter:card" content={ogTwitterCard} />}
  </Head>
);
