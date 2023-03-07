import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_GRAPHCMS_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
          "content-type": "application/json",
        },
      },
    },
  ],
  generates: {
    "./src/types/generated/hygraph.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/types/generated/hygraph.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        constEnums: false,
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
