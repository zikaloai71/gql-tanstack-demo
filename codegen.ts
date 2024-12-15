
import type { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com",
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [ 'typescript', // Generate TypeScript types for schema
        'typescript-operations', // Generate TypeScript types for queries/mutations
        ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
