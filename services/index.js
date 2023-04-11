import { request, gql } from "graphql-request";

const graphqlApi = process.env.HYGRAPH_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            author {
              name
              id
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            content {
              text
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlApi, query);
  return results.postsConnection.edges;
};
