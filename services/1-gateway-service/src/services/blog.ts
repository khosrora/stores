import axios, { AxiosResponse } from 'axios';
import { config } from '@gateway/config';

const axiosInstance = axios.create({
  baseURL: config.BASE_PATH_BLOG!,
  headers: { 'micro-service': 'blog' }
});

const get_blogs_service = async (): Promise<AxiosResponse> => {
  const res = await axiosInstance({
    url: 'http://localhost:5050/graphql',
    method: 'post',
    data: {
      query: `
    query getAllblogs{
      getAllBlogs {
        id 
        title
        author
        content
      }
    }
    `
    }
  });

  return res;
};

const get_one_blog_service = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosInstance({
    url: 'http://localhost:5050/graphql',
    method: 'post',
    data: {
      query: `
      query getOneBlog($getOneBlogId: ID!){
        getOneBlog(id: $getOneBlogId) {
          id 
          image
          title
          date
        }
    }
    `,
      variables: {
        getOneBlogId: id
      }
    }
  });

  return res;
};

const get_one_blog_title_service = async (title: string): Promise<AxiosResponse> => {
  const res = await axiosInstance({
    url: 'http://localhost:5050/graphql',
    method: 'post',
    data: {
      query: `
      query getByTitle($title: String!) {
        getBlogsWithTitle(title: $title) {
          id
          title
          author
        }
      }
    `,
      variables: {
        title
      }
    }
  });

  return res;
};

export { get_blogs_service, get_one_blog_service, get_one_blog_title_service };
