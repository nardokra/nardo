import { gql } from "graphql-request";

export const homepageQuery = gql`
  query homepage {
    homepage(where: { slug: "home" }, locales: [en, nl]) {
      localizations(includeCurrent: true) {
        locale
        id
        slug
        title
      }
    }
  }
`;
