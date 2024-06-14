import { Request, Response } from 'express';
import { get_blogs_service, get_one_blog_service, get_one_blog_title_service } from '@gateway/services/blog';

// ! login routes
// * get Otp
// * check Otp
// * get accessToken

async function get_all_blogs(req: Request, res: Response): Promise<void> {
  const response = await get_blogs_service();
  res.status(response.status).json(response.data);
}

async function get_one_blog(req: Request, res: Response): Promise<void> {
  const response = await get_one_blog_service(req.params.id);
  res.status(response.status).json(response.data);
}

async function get_one_blog_title(req: Request, res: Response): Promise<void> {
  if (typeof req.query.title === 'string') {
    const response = await get_one_blog_title_service(req.query.title);
    res.status(response.status).json(response.data);
  }
}

export { get_all_blogs, get_one_blog, get_one_blog_title };
