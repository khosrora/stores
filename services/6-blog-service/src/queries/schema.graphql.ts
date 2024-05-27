import { gql } from "apollo-server-express";

// Define GraphQL types
const typeDefs = gql`
  type Query {
    getAllBlogs: [BlogPost]
    getOneBlog(id: ID!): BlogPost
    getBlogsWithTitle(title: String!): [BlogPost]
  }

  type BlogPost {
    id: String
    title: String
    content: String
    author: String
    date: String
    image: String
  }
`;

export { typeDefs };
