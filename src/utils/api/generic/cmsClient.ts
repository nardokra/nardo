import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL || "", {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
  },
});

export const cmsClient = async <T>(query: string, vars?: {}): Promise<T> =>
  await client.request(
    gql`
      ${query}
    `,
    vars
  );
