import { get_all_blogs, get_one_blog , get_one_blog_title } from '@gateway/controllers/blog.controller';
import express, { Router } from 'express';

const router: Router = express.Router();

export const blogRoutes = (): Router => {
  router.get('/blog/get_all_blogs', get_all_blogs);
  router.get('/blog/get_one_blog/:id', get_one_blog);
  router.get('/blog/get_one_blog', get_one_blog_title);

  return router;
};
