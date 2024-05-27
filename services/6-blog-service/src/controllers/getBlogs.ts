import { fakeBlogPosts } from "@blog/utils/fakeData";

export function getBlogs() {
  return fakeBlogPosts;
}

export function getBlog(id: string) {
  return fakeBlogPosts.find((blog) => blog.id === id);
}

export function getBlogByTitle(title: string) {
  const searchTerm = title.toLowerCase();
  return fakeBlogPosts.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm)
  );
}
