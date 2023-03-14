import { gql } from "graphql-request";

export const cvPageQuery = gql`
  query cvPageQuery($slug: String, $locale: [Locale!]!) {
    cvPage(where: { slug: $slug }, locales: $locale) {
      slug
      seoAndOpenGraph {
        metaTitle
        metaDescription
        twitterCard
      }
      pageTitleBlock {
        identifier
        title
        subtitle
        subSubtitle
        titleWeight
      }
      profileImageBlock {
        imageEntry {
          image {
            url
          }
          altText
          identifier
        }
      }
      contactList {
        identifier
        title
        anchorList
        listEntry {
          identifier
          title
          description
          href {
            href
            target
          }
          private
        }
      }
      websiteList {
        identifier
        title
        anchorList
        listEntry {
          identifier
          title
          description
          href {
            href
            target
          }
          private
        }
      }
      privateImageBlock {
        imageEntry {
          image {
            url
          }
          altText
          identifier
        }
      }
      skillsList {
        identifier
        title
        listEntry {
          identifier
          title
        }
      }
      educationList {
        identifier
        title
        listEntry {
          identifier
          title
          description
        }
      }
      experienceList {
        identifier
        title
        topicListEntry {
          title
          subtitle
          subDescription
          description
          identifier
        }
      }
    }
  }
`;
