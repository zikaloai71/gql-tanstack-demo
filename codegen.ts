import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com",
  generates: {
    "./src/infrastructure/gql/": {
      preset: "client",
      plugins: [],   
      hooks: {
        afterOneFileWrite: [
          "sed -i 's/const documents = \\[\\];/const documents: never[] = [];/' ./src/infrastructure/gql/gql.ts",
          "sed -i \"/import \\* as types from '\\.\\/graphql';/d\" ./src/infrastructure/gql/gql.ts"
        ]
        
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;