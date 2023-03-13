import { gql } from "graphql-request";

export const cvPageQuery = gql`
  query cvPageQuery($slug: String) {
    cvPage(where: { slug: $slug }, locales: [en, nl]) {
      slug
      pageTitleBlock(locales: [en, nl]) {
        identifier
        title
        subtitle
        subSubtitle
        titleWeight
      }
      profileImageBlock(locales: [en, nl]) {
        imageEntry(locales: [en, nl]) {
          image(locales: [en, nl]) {
            url
          }
          altText
          identifier
        }
      }
      contactList(locales: [en, nl]) {
        identifier
        title
        anchorList
        listEntry(locales: [en, nl]) {
          identifier
          title
          description
          href(locales: [en, nl]) {
            href
            target
          }
          private
        }
      }
      websiteList(locales: [en, nl]) {
        identifier
        title
        anchorList
        listEntry(locales: [en, nl]) {
          identifier
          title
          description
          href(locales: [en, nl]) {
            href
            target
          }
          private
        }
      }
      privateImageBlock(locales: [en, nl]) {
        imageEntry(locales: [en, nl]) {
          image(locales: [en, nl]) {
            url
          }
          altText
          identifier
        }
      }
      skillsList(locales: [en, nl]) {
        identifier
        title
        listEntry(locales: [en, nl]) {
          identifier
          title
        }
      }
      educationList(locales: [en, nl]) {
        identifier
        title
        listEntry(locales: [en, nl]) {
          identifier
          title
          description
        }
      }
      experienceList(locales: [en, nl]) {
        identifier
        title
        topicListEntry(locales: [en, nl]) {
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
