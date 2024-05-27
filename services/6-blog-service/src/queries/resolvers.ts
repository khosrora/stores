import { getBlogs, getBlog, getBlogByTitle } from "@blog/controllers/getBlogs";

const resolvers = {
  Query: {
    getAllBlogs: async () => {
      const result = getBlogs();
      return result;
    },
    getOneBlog: async (_root: any, { id }: { id: string }) => {
      const result = getBlog(id);
      return result;
    },
    getBlogsWithTitle: async (_root: any, { title }: { title: string }) => {
      const result = getBlogByTitle(title);
      return result;
    },
  },
};

export { resolvers };
