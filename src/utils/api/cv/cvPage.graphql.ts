import { gql } from "graphql-request";

export const cvPageQuery = gql`
  query cvPageQuery($local: Locale!, $slug: String) {
    cvPage(where: { slug: $slug }, locales: [$local]) {
      slug
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
