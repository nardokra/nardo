import { gql } from "graphql-request";

export const cvPageQuery = gql`
  query cvPageQuery($local: Locale!, $slug: String) {
    cvPage(where: { slug: $slug }, locales: [$local]) {
      slug
      titleBlock {
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
      skillsList {
        title
        listEntry {
          identifier
          title
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
    }
  }
`;
