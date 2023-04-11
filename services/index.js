import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY || "";

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

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(last: 3, orderBy: createdAt_DESC) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlApi, query);

  return result.posts;
};
